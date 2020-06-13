import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
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
        console.log('user login failed')
        this._router.navigate(['/login'])
      }
    ) 
  }

}
