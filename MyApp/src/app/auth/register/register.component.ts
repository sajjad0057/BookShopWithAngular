import { Component, OnInit } from '@angular/core';
import { IRegisterFrom } from 'src/app/types/IAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  form : IRegisterFrom = {
    email : '',
    password : '',
    confirmPassword : ''
  }

  passwordMatched : boolean = true;

  ngOnInit(): void { 
  }

  submit(){
    if(this.form.password != this.form.confirmPassword){
      this.passwordMatched = false
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }

}
