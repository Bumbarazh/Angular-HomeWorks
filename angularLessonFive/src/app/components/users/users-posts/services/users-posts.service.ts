import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../../posts/models/post';

@Injectable({
  providedIn: 'root'
})
export class UsersPostsService {

  constructor(private httpClient: HttpClient) { }
  getUsersPostsById(id): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
