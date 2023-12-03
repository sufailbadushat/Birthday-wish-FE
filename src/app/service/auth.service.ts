import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:8081/';
  constructor(private http: HttpClient) {}

  signIn(loginObj : any){
    return this.http.post<any>(`${this.baseUrl}auth/signIn`,loginObj);
  }

}
