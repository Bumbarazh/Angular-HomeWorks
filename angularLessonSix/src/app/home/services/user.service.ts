import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  async getUser(id): Promise<User[]>{
    const response = this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').toPromise();
    const result = this.filter(await response, id);
    return result;
  }
  filter(users: User[], id): User[]{
    // tslint:disable-next-line:triple-equals
    return users.filter(value => value.id == id);
  }
}
