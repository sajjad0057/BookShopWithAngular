import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { IBook } from '../types/IBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  
  @Input() book : IBook = {} as IBook;
  @Output() bookEmitter = new EventEmitter<IBook>();
  
  ngOnInit(): void {
  }

  addToCart(){
    this.bookEmitter.emit(this.book)
  }

}
