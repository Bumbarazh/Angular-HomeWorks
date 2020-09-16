import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commment} from '../models/commment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<Commment[]> {
    return this.http.get<Commment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
