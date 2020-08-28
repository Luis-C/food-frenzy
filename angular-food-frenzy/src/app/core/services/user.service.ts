import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private PATH = 'http://localhost:3030/user';
  constructor(private http: HttpClient) {}

  update(updatedUser: User) {
    return this.http.post(`${this.PATH}/update`, updatedUser);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.PATH}/allusers`);
  }

  getUser(username: string): Observable<User | undefined> {
    return this.http.get<User | undefined>(`${this.PATH}/getUser/${username}`);
  }
}
