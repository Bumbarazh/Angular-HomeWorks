import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {UserComponent} from './user/user.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: UserComponent, children: [
          {
            path: 'posts/:id', loadChildren: () => import('../userposts/user-posts.module').then(value => value.UserPostsModule)
          }
        ]
      }
    ])
  ],
  providers: [UserService]
})
export class UserModule { }
