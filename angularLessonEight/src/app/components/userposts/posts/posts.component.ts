import { Component, OnInit } from '@angular/core';
import {IPost} from '../models/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts: IPost[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getAllPostsByUserId(params.id).subscribe(value => this.allPosts = value);
      console.log(this.allPosts);
    });
  }

  ngOnInit(): void {
  }

}
