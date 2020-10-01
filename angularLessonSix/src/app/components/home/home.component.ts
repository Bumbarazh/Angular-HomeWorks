import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  currentUser: User[];
  submitted = true;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  async getCurrentUser(myForm: NgForm, id: NgModel): Promise<void> {
    console.log(myForm);
    const result = await this.userService.getUser(myForm.value.id).then();
    this.user = result[0];
    console.log(this.user);
  }
  onSubmit(): boolean {
    return this.submitted = false;
  }
}
