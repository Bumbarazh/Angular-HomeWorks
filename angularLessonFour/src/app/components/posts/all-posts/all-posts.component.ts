import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../models/post';
import {ActivatedRoute} from '@angular/router';
import {Commment} from '../../../models/comment';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPosts: Post[] = [];
  allComments: Commment[];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
    this.postService.getAllPosts().subscribe(value => this.allPosts = value);
    this.activatedRoute.queryParams.subscribe(value => {
      this.postService.getCommentsOfPost(value.postId).subscribe(value1 => {
        this.allComments = value1;
      });
    });
  }

  ngOnInit(): void {
  }

}
