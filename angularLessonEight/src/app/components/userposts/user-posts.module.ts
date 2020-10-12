import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostService} from './services/post.service';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: PostsComponent
      }
    ])
  ],
  providers: [PostService]
})
export class UserPostsModule { }
