import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {PostComponent} from './post/post.component';
import {RouterModule} from '@angular/router';
import {PostService} from './services/post.service';

@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent
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
