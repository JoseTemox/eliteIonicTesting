import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  checkKey(key){

    let body = {
      key: key
    }

    return this.http.post('http://localhost:8080/api/check', body);

  }
}
