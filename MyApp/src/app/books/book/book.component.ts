import { Component,Input,OnDestroy,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


import { IBook } from 'src/app/types/IBook';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnDestroy{

  @Input() book : IBook = {} as IBook;
  isInCart : boolean = false;

  constructor(private cartService : CartService){
  }

  ngOnInit(): void {
    console.log({OnInit : "OnInit"});   
  }

  ngOnDestroy(): void {
    console.log({OnDestroy:"OnDestroy"});
  }
  
  addToCart(){
    this.cartService.add(this.book);
    this.isInCart = !this.isInCart
  }

  removeFromCart(){
    this.isInCart = !this.isInCart;
    this.cartService.remove(this.book)
  }

}