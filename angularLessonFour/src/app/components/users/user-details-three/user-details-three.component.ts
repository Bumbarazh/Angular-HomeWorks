import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserDetails} from '../../../models/user-details';

@Component({
  selector: 'app-user-details-three',
  templateUrl: './user-details-three.component.html',
  styleUrls: ['./user-details-three.component.css']
})
export class UserDetailsThreeComponent implements OnInit {
  user: UserDetails;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.router.getCurrentNavigation().extras.state;
      this.user = history.state;
      console.log(this.user);
    });
  }

  ngOnInit(): void {
  }

}
