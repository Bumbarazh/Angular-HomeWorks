import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllUsersComponent} from './all-users/all-users.component';
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserDetailsTwoComponent} from './user-details-two/user-details-two.component';
import {UserDetailsThreeComponent} from './user-details-three/user-details-three.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserService} from './services/user.service';



@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserDetailsTwoComponent,
    UserDetailsThreeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: AllUsersComponent,
        children: [
          {
            path: 'userposts', loadChildren: () => import('../users/users-posts/user-posts.module').then(value => value.UserPostsModule)
          },
          {
            path: 'details/:id', component: UserDetailsTwoComponent
          }
        ]
      }
  ])
  ],
  providers: [UserService]
})
export class UserModule { }
