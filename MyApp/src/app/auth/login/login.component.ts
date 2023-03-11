import { Component, OnInit } from '@angular/core';
import { ILoginFrom } from 'src/app/types/IAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form : ILoginFrom = {
    email : '',
    password : ''
  };
  
  isLoading : boolean = false;

  ngOnInit(): void {   
  }

  submit(){
    if(this.isLoading)return
    this.isLoading = !this.isLoading;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        alert("Log in Success !")
        this.form =  {
          email : '',
          password : ''
        };
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }).finally(()=>{
        this.isLoading = !this.isLoading;
      });
  }

}
