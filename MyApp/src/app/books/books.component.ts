import { Component, OnInit } from '@angular/core';

interface IBook{
  name : string,
  author : string,
  img : string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books : IBook[] = [
    {
      name : "c# basic",
      author : "Robert C Martin",
      img : "https://m.media-amazon.com/images/I/61yRxqI4WfL._AC_UY218_.jpg"
    },
    {
      name : "c# Intermediate",
      author : "Robert C Martin",
      img :  "https://m.media-amazon.com/images/I/71s6gwpezHL._AC_UY218_.jpg"
    },
    {
      name : "Good for a Girl",
      author : "Lauren Fleshman",
      img :  "https://images-na.ssl-images-amazon.com/images/I/51+mYU+YUwL._AC_SX184_.jpg"
    }
  ] 

  isDesabled : boolean = false;
  isShowing : boolean = false;
  myName : string = "" ;

  constructor(){}
  
  ngOnInit(): void {
    
  }

  handleClick(){
    alert("I am working!");
  }

  handleInput(event:any){
    this.myName = event.target.value
  }

}
