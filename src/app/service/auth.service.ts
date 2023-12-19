import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SseService } from './sse.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(loginObj: any) {
    return this.http.post<any>(`${this.BASE_URL}auth/signIn`, loginObj);
  }


  logOut() {
    // const confirmation = confirm('Do you want to logout?');
    // if (confirmation) {
    localStorage.clear();

    this.router.navigate(['login']);
  }


  storeUser(user: any) {
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  storeRole(role: string) {
    localStorage.setItem('role', role);
  }
  getRole() {
    return localStorage.getItem('role')
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
