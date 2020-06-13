import { Component, OnInit } from '@angular/core';
import { BookService} from '../book.service';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.css']
})
export class ReservedBooksComponent implements OnInit {
  book:any;
  userId:any;

  constructor(private bookService: BookService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.authService.getCurrentUserId();
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

  borrow(title, bookID, userId) {
    this.bookService.addToBorrowedBooks(title, bookID, userId)
    .pipe(first())
    .subscribe(
      data => {
        // @ts-ignore
        // this.book = JSON.parse(JSON.stringify(data));
        // console.log("data => ", data)  
        window.location.reload();
      },
      error => {
        console.log(error);
      })
  }

}
