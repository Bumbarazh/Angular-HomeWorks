import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../models/post';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {
  allPosts: Post[] = [];
  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.postService.getUsersPostsById(value.id).subscribe(value1 => this.allPosts = value1);
    });
  }

  ngOnInit(): void {
  }

}
