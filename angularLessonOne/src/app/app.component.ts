import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLessonOne';
  textOfTodo = '';
  allTodos = [];

  addToDo = function() {
    this.allTodos.push(this.textOfTodo);
    console.log(this.allTodos);
    this.textOfTodo = '';
  };

  deleteTodo(delTodo) {
    this.allTodos = this.allTodos.filter(value => delTodo !== value)
  };
}
