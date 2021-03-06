import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
    console.log(this.users);
  }
}
