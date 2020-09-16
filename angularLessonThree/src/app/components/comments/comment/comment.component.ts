import {Component, Input, OnInit} from '@angular/core';
import {Commment} from '../../../models/commment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment: Commment;

  constructor() { }

}
