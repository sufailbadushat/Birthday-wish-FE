import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:8081/';
  constructor(
    private http: HttpClient,
    private router: Router) {}

  signIn(loginObj : any){
    return this.http.post<any>(`${this.baseUrl}auth/signIn`,loginObj);
  }


  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
