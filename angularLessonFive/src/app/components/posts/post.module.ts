import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {PostComponent} from './post/post.component';
import {PostsCommentsComponent} from './posts-comments/comments-of-post/posts-comments.component';
import {RouterModule} from '@angular/router';
import {PostService} from './services/post.service';
import { PostCommentComponent } from './posts-comments/post-comment/post-comment.component';



@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent,
    PostsCommentsComponent,
    PostCommentComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AllPostsComponent,
        children: [
          {
            // tslint:disable-next-line:max-line-length
            path: 'comments/:id', loadChildren: () => import('../posts/posts-comments/post-comments.module').then(value => value.PostCommentsModule)
          }
        ]
      }
    ])
  ],
  providers: [PostService]
})
export class PostModule { }
