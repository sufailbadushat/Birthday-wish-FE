import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any>(`${this.BASE_URL}admin/getAll`);
  }

  getBirthdayEmp(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}admin/birthday`);
  }

  dispatchEvent(userId: number, desc:string): Observable<any> {

    if(!desc){
      desc = ""
    }

    return this.http.get(`${this.BASE_URL}sse/sendEvent?userId=${userId}&desc=${desc}`, { observe: 'response', responseType: 'text' });
  }

}
