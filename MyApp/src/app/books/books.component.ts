import { Component, OnInit } from '@angular/core';

interface IBook{
  name : string,
  author : string,
  img : string,
  price : number
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
      img : "https://m.media-amazon.com/images/I/61yRxqI4WfL._AC_UY218_.jpg",
      price : 700
    },
    {
      name : "c# intermediate",
      author : "Robert C Martin",
      img :  "https://m.media-amazon.com/images/I/71s6gwpezHL._AC_UY218_.jpg",
      price : 600
    },
    {
      name : "good for a girl",
      author : "Lauren Fleshman",
      img :  "https://images-na.ssl-images-amazon.com/images/I/51+mYU+YUwL._AC_SX184_.jpg",
      price : 800
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
