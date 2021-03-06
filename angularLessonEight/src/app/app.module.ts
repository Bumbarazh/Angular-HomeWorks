import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
          {
            path: '', component: HomeComponent, children: [
              {
                path: 'user/:id', loadChildren: () => import('./components/user/user.module').then(value => value.UserModule)
              }
            ]
          }
          ]
        )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
