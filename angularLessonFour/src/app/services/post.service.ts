import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUsersPostsById(id): Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
