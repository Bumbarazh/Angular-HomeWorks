import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersPostsComponent} from './posts-of-user/users-posts.component';
import {UserPostComponent} from './user-post/user-post.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UsersPostsComponent,
    UserPostComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UsersPostsComponent
      }
    ])
  ]
})
export class UserPostsModule { }
