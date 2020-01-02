import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Todo} from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo;
  id: number;
  username: string;
  constructor(
      private toDoDataService: TodoDataService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('authenticaterUser');
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1, '', false, new Date());
    this.toDoDataService.getTodoById(this.username, this.id).subscribe(
        data => this.todo = data
    );
  }

}
