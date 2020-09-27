import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commment} from '../../../comments/models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostCommentsService {

  constructor(private httpClient: HttpClient) {
  }
  getCommentsOfPost(id): Observable<Commment[]>{
    return this.httpClient.get<Commment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
