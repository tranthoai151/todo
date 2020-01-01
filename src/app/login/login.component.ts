import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'tranthoai151';
  password = 'abc1';
  invalidLogin = false;
  errorMessage = 'Please login again !!!!!!';

  constructor(private router: Router,
              private hardCodeAuthentication: HardcodeAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin() {
    if (this.hardCodeAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
