import { Component, OnInit } from '@angular/core';
import { BookService} from '../book.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {
  book:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBorrowedBooks()
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
