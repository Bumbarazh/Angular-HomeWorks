import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToCurrentUser(id: number): void {
    this.router.navigate(['details', id], {
      relativeTo: this.activatedRoute,
      state: {userId: id}
    });
  }
}
