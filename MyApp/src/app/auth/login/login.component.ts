import { Component, OnInit } from '@angular/core';
import { ILoginFrom } from 'src/app/types/IAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';


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
  
  constructor(private authService : AuthService){

  }

  ngOnInit(): void {   
  }

  submit(){

    this.form = this.authService.login(this.form)
  }

  isLoading(): boolean{
    return this.authService.isLoading;
  }

}
