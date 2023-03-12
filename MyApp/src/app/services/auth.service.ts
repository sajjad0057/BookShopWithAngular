import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ILoginFrom, IRegisterFrom } from '../types/IAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : boolean = false;
  isLoading : boolean = false;

  constructor(private router:Router) { }

  login(form:ILoginFrom):ILoginFrom{
    if(this.isLoading){
      return {
        email : '',
        password : ''
      };
    };
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => { 
        this.isAuthenticated = true;
        this.isLoading = false;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        this.isLoading = false;
      })
      return {
        email : '',
        password : ''
      };
  }

  register(form:IRegisterFrom){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email,form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        console.log(userCredential);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      });
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
      this.router.navigate(['login'])
    }).catch((error) => {
      // An error happened.
    });
  }

}




