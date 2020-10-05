import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user/services/user.service';
import {User} from '../user/models/user';
import {NgForm, NgModel} from '@angular/forms';
import {IPost} from '../posts/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valOfSelect: number;
  userArray: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.userArray = value);
    console.log(this.userArray);
  }

  userI(id: NgModel): void {
    // tslint:disable-next-line:triple-equals
    const result = this.userArray.filter(value => value.id == id.value);
    // this.user = result[0];
    console.log(this.userArray);
  }
}
