import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BookService} from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private bookService: BookService, private router: Router) {}

  addForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    numberOfCopies:['',Validators.required],
    category:['',Validators.required]
  });

  get formValues() {
    return this.addForm.controls
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.bookService.addBook(this.formValues.title.value, this.formValues.author.value, this.formValues.numberOfCopies.value, this.formValues.category.value)
    .pipe(first())
    .subscribe(
      data => {  
        this.router.navigate(['/homeAdmin']);
      },
      error => {
        console.log(error);
      });
  }

}
