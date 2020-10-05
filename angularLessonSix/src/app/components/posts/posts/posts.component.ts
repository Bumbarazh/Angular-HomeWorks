import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';
import {IPost} from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  h1 = 'All user posts';

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.postService.getAllPostsOfUser(value.id).subscribe(value1 => this.posts = value1);
      console.log(value);
    });
  }

  ngOnInit(): void {
  }

}
