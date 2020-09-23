import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/comments/all-comments/all-comments.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import { UserComponent } from './components/users/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/posts/post/post.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { UsersPostsComponent } from './components/users/users-posts/users-posts.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllPostsComponent,
    AllCommentsComponent,
    AllUsersComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    UsersPostsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'users', component: AllUsersComponent,
        children: [
          {
            path: 'posts', component: UsersPostsComponent
          },
          {
            path: 'details/:id', component: UserDetailsComponent
          }
        ]
      },
      {
        path: 'posts', component: AllPostsComponent
      },
      {
        path: 'commments', component: AllCommentsComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
