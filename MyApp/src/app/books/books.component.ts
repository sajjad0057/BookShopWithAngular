import { Component, OnInit } from '@angular/core';
import { IBook } from '../types/IBook';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : IBook[] = [];
  isDesabled : boolean = false;
  isShowing : boolean = false;
  myName : string = "" ;

  constructor(private booksService:BooksService){  
  }
  
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  handleClick(){
    alert("I am working!");
  }

  handleInput(event:any){
    this.myName = event.target.value
  }
  
}
