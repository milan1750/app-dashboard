import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class AuthService {

  api_url =  environment.api_url;
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.api_url + 'userlogin', user);
  }

  logIn(user) {
    return this.http.post<any>(this.api_url + 'login', user);
  }


  loggedIn() {
    return !!localStorage.getItem('_appData');
  }

  getToken() {
    return localStorage.getItem('_appData');
  }
}
