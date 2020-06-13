import { Component, OnInit } from '@angular/core';
import { BookService} from '../book.service';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  book:any;
  userId: String;

  constructor(private bookService: BookService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.userId = this.authService.getCurrentUserId();
    this.bookService.getAllBooks(this.userId)
    .pipe(first())
    .subscribe(
      data => {
        // @ts-ignore
        this.book = JSON.parse(JSON.stringify(data));
        console.log(this.book)
      },
      error => {
        console.log(error);
    });
  }

  reserve(title, userId) {
    this.bookService.addToReservedBooks(title, userId)
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

  unReserve(title, bookId) {
    this.bookService.unReserveBook(title, bookId)
    .pipe(first())
    .subscribe(
      data => {
        // @ts-ignore
        // this.book = JSON.parse(JSON.stringify(data));
        window.location.reload();
      },
      error => {
        console.log(error);
      })
  }

}
