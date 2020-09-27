import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Commment} from '../../../comments/models/comment';
import {PostCommentsService} from '../services/post-comments.service';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {
  allComments: Commment[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private postCommentsService: PostCommentsService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.postCommentsService.getCommentsOfPost(value.postId).subscribe(value1 => {
          this.allComments = value1;
          console.log(this.allComments);
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
