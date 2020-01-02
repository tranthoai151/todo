import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'WelCome ...';
  name = '';
  welComeMessageFromService: String;
  constructor(private router: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
    console.log(this.router.snapshot.params['name']);
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.name = sessionStorage.getItem('authenticaterUser');
    // this.service.excuteHelloWorldBeanService().subscribe(
    //     response => this.handleSuccessfullResponse(response),
    //     error => this.handleErrorResponse(error)
    // );
    this.service.excuteHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
        response => this.handleSuccessfullResponse(response),
        error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfullResponse(response) {
    this.welComeMessageFromService = response.message;
    console.log(response);
  }
  handleErrorResponse(error) {
    console.log(error);
    this.welComeMessageFromService = error.error.message;
  }
}
