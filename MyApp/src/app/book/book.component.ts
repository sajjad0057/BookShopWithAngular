import { Component,EventEmitter,Input,OnDestroy,OnInit, Output } from '@angular/core';
import { IBook } from '../types/IBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnDestroy{

  @Input() book : IBook = {} as IBook;
  @Output() bookEmitter = new EventEmitter<IBook>();

  myInterval : any = null;
  
  ngOnInit(): void {
    this.myInterval = setInterval(()=>{
      console.log("Hello");     
    },2000)
  }

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
    console.log({ngOnDestroy : "onDestroy"});   
  }
  

  addToCart(){
    this.bookEmitter.emit(this.book)
  }

}
