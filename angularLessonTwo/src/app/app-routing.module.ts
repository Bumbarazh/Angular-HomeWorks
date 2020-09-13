import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {DeleteTodoComponent} from './components/delete-todo/delete-todo.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'add-todo', component: AddTodoComponent
  },
  {
    path: 'del-todo', component: DeleteTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
