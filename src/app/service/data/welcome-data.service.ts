import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: String) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  excuteHelloWorldBeanService() {
    console.log('excuteHelloWorldBeanService');
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  excuteHelloWorldBeanServiceWithPathVariable(name) {
    console.log('excuteHelloWorldBeanServiceWithPathVariable');
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);
  }
}
