import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = 'http://localhost:8081/';

  constructor(private http:HttpClient){}

  getEmployees() {
    return this.http.get<any>(`${this.BASE_URL}admin/getAll`);
  }

  getBirthdayEmp() : Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}admin/birthday`);
  }

}
