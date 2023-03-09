import { Component, OnInit } from '@angular/core';
import { IBook } from '../types/IBook';

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
      name : "Affirmation Alphabet",
      author : "Briana Beth Hetherington",
      img :  "https://m.media-amazon.com/images/I/51g6vuvgPaL.jpg",
      price : 600
    },
    {
      name : "good for a girl",
      author : "Lauren Fleshman",
      img :  "https://images-na.ssl-images-amazon.com/images/I/51+mYU+YUwL._AC_SX184_.jpg",
      price : 800
    }
  ] 


  cart : IBook[] = [];
  isDesabled : boolean = false;
  isShowing : boolean = false;
  myName : string = "" ;

  constructor(){
    console.log({constructor : "constructor"});
    
  }
  
  ngOnInit(): void {
    console.log({ onInit : "On In It"});
    
  }

  handleClick(){
    alert("I am working!");
  }

  handleInput(event:any){
    this.myName = event.target.value
  }

  addToCart(event:IBook) {
    console.log(event);
    
    }

}
