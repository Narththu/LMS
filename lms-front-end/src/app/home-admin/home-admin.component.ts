import { Component, OnInit } from '@angular/core';
import { BookService} from '../book.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  book:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooksByAdmin()
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
