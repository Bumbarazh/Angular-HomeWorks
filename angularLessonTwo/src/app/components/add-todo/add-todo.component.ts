import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  textOfTodo = '';
  allTodos = [];

  constructor() {
  }
  addTodo = () => {
    this.allTodos.push(this.textOfTodo);
    this.textOfTodo = '';
  }
  ngOnInit(): void {
  }

}
