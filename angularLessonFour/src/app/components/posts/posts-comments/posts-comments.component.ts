import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';
import {Commment} from '../../../models/comment';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {
  allComments: Commment[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.postService.getCommentsOfPost(value.postId).subscribe(value1 => {
          this.allComments = value1;
          console.log(this.allComments);
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
