import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {NgForm, NgModel} from '@angular/forms';
import {IPost} from '../../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  userArray: User[];
  postArray: IPost[];
  userValid = false;
  postValid = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.userArray = value);
  }

  userI(myForm: NgForm): void {
    // tslint:disable-next-line:triple-equals
    const result = this.userArray.filter(value => value.id == myForm.value.id);
    this.user = result[0];
    this.userValid = true;
    this.postValid = false;
  }
  userPosts(id: number): void {
    this.userService.getAllPostsOfUser(id).subscribe(value => this.postArray = value);
    this.postValid = true;
  }
}
