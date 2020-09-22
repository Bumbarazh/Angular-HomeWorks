import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers: User[] = [];

  constructor(private userSevice: UserService) {
    this.userSevice.getAllUsers().subscribe(value => this.allUsers = value);
  }

  ngOnInit(): void {
  }

}
