import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo: IUser;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUserInfoById(params.id).subscribe(value => this.userInfo = value);
    });
  }

  ngOnInit(): void {
  }

}
