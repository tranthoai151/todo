import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {error} from 'util';
import {TodoComponent} from '../todo/todo.component';
import {Router} from '@angular/router';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  username: string;
  todos = [];
  message: string;

  constructor(
      private toDoService: TodoDataService,
      private router: Router
  ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('authenticaterUser');
    this.refreshTodo();
  }
  refreshTodo() {
    this.toDoService.retrieveAllTodos(this.username).subscribe(
        response => {
          console.log('response', response);
          this.todos = response;
        }
    );
  }

  deleteTodo(id: any) {
    console.log('delete todo', id);
    this.toDoService.deleteTodo(this.username, id).subscribe(
        response => {
          console.log('delete', response);
          this.message = 'Delete Success';
          this.refreshTodo();
        }
    );
  }

  updateTodo(id: any) {
    console.log('UPDATE TODO', id);
    this.router.navigate(['todos', id]);
  }
}
