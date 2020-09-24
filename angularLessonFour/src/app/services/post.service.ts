import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';
import {Commment} from '../models/comment';

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
  getCommentsOfPost(id): Observable<Commment[]>{
    return this.http.get<Commment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
