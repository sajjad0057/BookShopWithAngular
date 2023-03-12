import { Component, OnInit } from '@angular/core';
import { IRegisterFrom } from 'src/app/types/IAuth';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService:AuthService){}

  ngOnInit(): void { 
  }

  submit(){
    if(this.form.password != this.form.confirmPassword){
      this.passwordMatched = false
      return;
    }else{
      this.authService.register(this.form);
    }
  }

}
