import { Component, OnInit } from '@angular/core';
import { BookService} from '../book.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.css']
})
export class ReservedBooksComponent implements OnInit {
  book:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllReservedBooks()
    .pipe(first())
    .subscribe(
      data => {
        // @ts-ignore
        this.book = JSON.parse(JSON.stringify(data)); 
      },
      error => {
        console.log(error);
      });
  }

}
