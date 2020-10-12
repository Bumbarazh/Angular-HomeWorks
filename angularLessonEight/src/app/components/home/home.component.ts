import { Component, OnInit } from '@angular/core';
import {IUser} from '../user/models/user';
import {UsersService} from './services/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allUsers: IUser[] = [];
  form: FormGroup;
  name: FormControl = new FormControl('1');

  constructor(private usersService: UsersService) {
    this.form = new FormGroup(
      {name: this.name}
    );
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(value => this.allUsers = value);
  }

}
