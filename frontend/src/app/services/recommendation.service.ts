import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from './../../environments/environment';
import { Observable } from 'rxjs';
import {Show} from './../models/show';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  API_URL = environment.apiUrl + '/recommendations';

  constructor(private http: HttpClient) { 

  }
  
  getShowRecommendation(id:string) {
    return this.http.get<any>(this.API_URL + '/'+ id);
  }

  saveRecommendation(id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + '/save/' + id);
  }

  resetRecommendation(id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + '/reset/' + id);
  }
}
