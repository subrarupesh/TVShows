import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from './../../environments/environment';
import { Observable } from 'rxjs';
import {Show} from './../models/show';
@Injectable({
  providedIn: 'root'
})
export class ShowService {
  API_URL = environment.apiUrl + '/shows';

  constructor(private http: HttpClient) { 

  }
  
  getShow(id:string) {
    return this.http.get<any>(this.API_URL + '/'+ id);
  }

  getShows() {
    return this.http.get<any>(this.API_URL + '/');
  }

  updateShow(id: string, show: Show): Observable<any> {
    return this.http.put<any>(this.API_URL + '/' + id, show);
  }

  addShow(show: Show): Observable<any> {
    return this.http.post<any>(this.API_URL + '/create', show);
  }

  deleteShow(id: string) {
    return this.http.delete<any>(this.API_URL + '/' + id);
  }
}
