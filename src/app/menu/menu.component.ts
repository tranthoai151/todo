import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(private hardCodeAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardCodeAuthenticationService.isUserLoggedIn();
  }

}
