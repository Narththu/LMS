import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //-----------------services for admin-----------------

  // fetch all books from db
  getAllBooksByAdmin() {
    return this.http.get<any>(`${this.apiUrl}/allBookByAdmin`)
    .pipe(map(allBooks =>{
      return allBooks
    }))
  }

  // fetch all reserved books from db
  getAllReservedBooks() {
    return this.http.get<any>(`${this.apiUrl}/allReserved`)
    .pipe(map(allReservedBooks =>{
      return allReservedBooks
    }))
  }

  // fetch all borrowed books from db
  getAllBorrowedBooks() {
    return this.http.get<any>(`${this.apiUrl}/allBorrowedBooks`)
    .pipe(map(allBorrowedBooks =>{
      return allBorrowedBooks
    }))
  }

  // add new book to db
  addBook(title, author, numberOfCopies, category){
    return this.http.post<any>(`${this.apiUrl}/addbook`,{title, author, numberOfCopies, category})
    .pipe(map(addedBook=>{
      return addedBook
    }))
  }

  // add book to borrowed books
  addToBorrowedBooks(title, bookID, userId) {
    return this.http.post<any>(`${this.apiUrl}/borrowed`,{title, bookID, userId})
    .pipe(map(borrowedBook=>{
      return borrowedBook
    }))
  }

  // make returned book as available
  returnBook(title, bookID) {
    return this.http.post<any>(`${this.apiUrl}/returned`,{title, bookID})
    .pipe(map(returnedBook=>{
      return returnedBook
    }))
  }


  //----------------services for user---------------------

  // search book by title
  getBookByTitle() {
    return this.http.get<any>(`${this.apiUrl}/book`)
    .pipe(map(books =>{
      return books
    }))
  }

  // fetch all books from db
  getAllBooks(userId) {
    return this.http.post<any>(`${this.apiUrl}/allBook`, {userId})
    .pipe(map(books =>{
      return books
    }))
  }

  // fetch books by category
  getBookByCategory() {
    return this.http.get<any>(`${this.apiUrl}/category`)
    .pipe(map(books =>{
      return books
    }))
  }

  // fetch all reserved books
  getReservedBooks() {
    return this.http.get<any>(`${this.apiUrl}/reservedBook`)
    .pipe(map(books =>{
      return books
    }))
  }

  // fetch my borrowed books
  getBorrowedBooks() {
    return this.http.get<any>(`${this.apiUrl}/myBorrowedBooks`)
    .pipe(map(books =>{
      return books
    }))
  }

  // reserve book
  addToReservedBooks(title, userId) {
    return this.http.post<any>(`${this.apiUrl}/reserveBook`,{title, userId})
    .pipe(map(book =>{
      console.log(book)
      return book
    }))
  }

  // unreserve book
  unReserveBook(title, bookID) {
    return this.http.post<any>(`${this.apiUrl}/unReserveBook`,{title, bookID})
    .pipe(map(book =>{
      return book
    }))
  }

}
