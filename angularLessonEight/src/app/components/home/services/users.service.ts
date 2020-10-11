import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../user/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
