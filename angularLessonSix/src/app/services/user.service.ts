import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {IPost} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<User[]>{
     return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getAllPostsOfUser(id): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
