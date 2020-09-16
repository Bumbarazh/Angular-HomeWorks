import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../../services/comment.service';
import {Commment} from '../../../models/commment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent{
  allComments: Commment[] = [];

  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(value => {
      console.log(value);
      this.allComments = value;
    });
  }

}
