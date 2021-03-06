import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostCommentsService} from './services/post-comments.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostsCommentsComponent} from './comments-of-post/posts-comments.component';
import {PostCommentComponent} from './post-comment/post-comment.component';



@NgModule({
  declarations: [
    PostsCommentsComponent,
    PostCommentComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: PostsCommentsComponent
      }
    ])
  ],
  providers: [PostCommentsService]
})
export class PostCommentsModule { }
