import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserComponent} from './components/user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: UserComponent, children: [
          {
            path: 'uposts', loadChildren: () => import('../posts/post.module').then(value => value.PostModule)
          }
        ]
      },
    ])
  ],
  providers: [UserService]
})
export class UserModule { }
