import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/user';
import {UserDetails} from '../models/user-details';

@Component({
  selector: 'app-user-details-two',
  templateUrl: './user-details-two.component.html',
  styleUrls: ['./user-details-two.component.css']
})
export class UserDetailsTwoComponent implements OnInit {
  userDetailsTwo: UserDetails;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.router.getCurrentNavigation().extras.state;
      this.userDetailsTwo = history.state;
      // console.log(this.userDetailsTwo);
    });
  }

  ngOnInit(): void {
  }

}
