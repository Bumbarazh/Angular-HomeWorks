import {Component, Input, OnInit} from '@angular/core';
import {Commment} from '../../../comments/models/comment';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  @Input() comment: Commment;

  constructor() { }

  ngOnInit(): void {
  }

}
