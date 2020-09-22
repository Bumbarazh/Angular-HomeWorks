import {Component, Input, OnInit} from '@angular/core';
import {Commment} from '../../../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Commment;

  constructor() { }

  ngOnInit(): void {
  }

}
