import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  allUsers: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      console.log(value);
      this.allUsers = value;
    });
  }

}
