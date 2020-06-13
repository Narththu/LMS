import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('userCategory')
    localStorage.removeItem('currentUserId')
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUserCategory() {
    return localStorage.getItem('userCategory')
  }

  getCurrentUserId() {
    return localStorage.getItem('currentUserId')
  }
  
  isAdmin() {
    let isadmin = (localStorage.getItem('userCategory') == 'admin');
    if(isadmin) {
      return true
    }
    else {
      return false
    }
  }

  isUserLoggedIn() {
    if(this.loggedIn() && !this.isAdmin()) {
      return true
    }
    else{
      return false
    }
  }

  isAdminLoggedIn() {
    if(this.loggedIn() && this.isAdmin()) {
      return true
    }
    else{
      return false
    }
  }

  // return token exists in the browser or not
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
