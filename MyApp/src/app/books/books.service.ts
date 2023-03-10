import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
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
    ];
  }
}
