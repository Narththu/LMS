import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: any = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.registerUserData.isAdmin = false;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userCategory', res.category);
        localStorage.setItem('currentUserId', res.userId);
        if(res.category == "admin") {
          this._router.navigate(['/homeAdmin'])
        }
        else {
          this._router.navigate(['/homeUser'])
        }
      },
      err => {
        console.log(err)
        console.log('register user failed')
        this._router.navigate(['/register'])
      }
    )      
  }

}