import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from './../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = environment.apiUrl + '/users';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.API_URL + '/login', { email: email, password: password });
  }

  signUp(user: User) {
    return this.http.post<any>(this.API_URL + '/signup', user);
  }

}
