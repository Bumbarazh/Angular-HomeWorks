import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {IPost} from '../../posts/models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
