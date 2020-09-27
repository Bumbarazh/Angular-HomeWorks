import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllCommentsComponent} from './all-comments/all-comments.component';
import {CommentComponent} from './comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommentService} from './services/comment.service';



@NgModule({
  declarations: [
    AllCommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: AllCommentsComponent
      }
    ])
  ],
  providers: [CommentService]
})
export class CommentsModule { }
