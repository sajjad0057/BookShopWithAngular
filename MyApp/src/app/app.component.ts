import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/firebase.config";
import { AuthService } from "./services/auth.service";

@Component({
    selector : 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    constructor(private authService: AuthService) {}
    
    ngOnInit(): void {
        initializeApp(firebaseConfig)
    }


    isAuthenticated() {
        return this.authService.isAuthenticated;
      }

    logout(){
        this.authService.logout();
    }

}