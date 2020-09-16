import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/users/user/user.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { AllCommentsComponent } from './components/comments/all-comments/all-comments.component';
import { CommentComponent } from './components/comments/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    HomeComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'users', component: AllUsersComponent},
        {path: 'posts', component: AllPostsComponent},
        {path: 'comments', component: AllCommentsComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
