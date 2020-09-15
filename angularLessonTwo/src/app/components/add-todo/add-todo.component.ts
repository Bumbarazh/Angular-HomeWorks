import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  textOfTodo = '';
  allTodos = [];

  constructor() {
  }
  addTodo = () => {
    this.allTodos.push(this.textOfTodo);
    this.textOfTodo = '';
  }
  removeTodo = (todo: string) => {
    this.allTodos = this.allTodos.filter(value => todo !== value);
  }
}
