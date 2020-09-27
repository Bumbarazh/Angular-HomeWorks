import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../posts/models/post';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {UsersPostsService} from '../services/users-posts.service';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {
  allPosts: Post[] = [];
  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private usersPostsService: UsersPostsService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.usersPostsService.getUsersPostsById(value.id).subscribe(value1 => this.allPosts = value1);
    });
  }

  ngOnInit(): void {
  }

}
