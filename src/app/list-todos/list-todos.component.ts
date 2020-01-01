import { Component, OnInit } from '@angular/core';


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

  todos = [
    new Todo(1, 'Learn AngularJs', true, new Date()),
    new Todo(2, 'Learn Vuejs', false, new Date()),
    new Todo(3, 'Learn Java', true, new Date()),
    new Todo(4, 'Learn English', false, new Date()),
    // {id: 1, description: 'Learn AngularJs'},
    // {id: 2, description: 'Learn Vuejs'},
    // {id: 3, description: 'Learn Java'},
    // {id: 4, description: 'Learn English'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
