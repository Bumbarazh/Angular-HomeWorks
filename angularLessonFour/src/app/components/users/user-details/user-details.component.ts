import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUserById(params.id).subscribe(value => this.userDetails = value);
    });
  }

  ngOnInit(): void {
  }

}
