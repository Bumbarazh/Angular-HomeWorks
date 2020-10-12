import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
        path: 'users', loadChildren: () => import('./components/users/user.module').then(value => value.UserModule),
      },
      {
        path: 'userposts', loadChildren: () => import('./components/posts/post.module').then(value => value.PostModule)
      },
      {
        path: 'comments', loadChildren: () => import('./components/comments/comments.module').then(value => value.CommentsModule)
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
