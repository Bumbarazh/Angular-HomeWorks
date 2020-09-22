import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.postService.getUsersPostsById(value.id).subscribe(value1 => console.log(value1));
    });
  }

  ngOnInit(): void {
  }

}
