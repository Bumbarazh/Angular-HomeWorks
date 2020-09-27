import { Component, OnInit } from '@angular/core';
import {CommentService} from '../services/comment.service';
import {Commment} from '../models/comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  allComments: Commment[] = [];

  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(value => this.allComments = value);
  }

  ngOnInit(): void {
  }

}
