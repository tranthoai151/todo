import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    console.log('before', this.isUserLoggedIn());
    if (username === 'tranthoai151' && password === 'abc1') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after', this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  loogout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
