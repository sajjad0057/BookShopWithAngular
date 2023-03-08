import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  



  name : string = "c# basic";
  author : string = "Robert C Martin"
  src : string = "https://m.media-amazon.com/images/I/61yRxqI4WfL._AC_UY218_.jpg"

  name2 : string = "c# Intermediate";
  author2 : string = "Robert C Martin"
  src2 : string = "https://m.media-amazon.com/images/I/71s6gwpezHL._AC_UY218_.jpg"

  isDesabled : boolean = false;

  constructor(){}
  
  ngOnInit(): void {
    
  }

  handleClick(){
    alert("I am working!");
  }

  MyName : string = "";

  handleInput(event:any){
    this.MyName = event.target.value
  }

}
