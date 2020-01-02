import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Todo {
  constructor(
      public id: number,
      public description: string,
      public done: boolean,
      public targetDate: Date
  ) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  getTodoById(username, id) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}

