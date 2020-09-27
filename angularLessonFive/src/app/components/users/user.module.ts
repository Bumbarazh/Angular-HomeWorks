import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllUsersComponent} from './all-users/all-users.component';
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserDetailsTwoComponent} from './user-details-two/user-details-two.component';
import {UserDetailsThreeComponent} from './user-details-three/user-details-three.component';
import {UsersPostsComponent} from './users-posts/posts-of-user/users-posts.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserService} from './services/user.service';
import { UserPostComponent } from './users-posts/user-post/user-post.component';



@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserDetailsTwoComponent,
    UserDetailsThreeComponent,
    UsersPostsComponent,
    UserPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: AllUsersComponent,
        children: [
          {
            path: 'posts', component: UsersPostsComponent
          },
          {
            path: 'details/:id', component: UserDetailsTwoComponent
          }
        ]
      }
  ])
  ],
  providers: [UserService]
})
export class UserModule { }
