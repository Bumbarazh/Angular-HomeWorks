import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent{
  allPosts: Post[] = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(value => {
      console.log(value);
      this.allPosts = value;
    });
  }



}
