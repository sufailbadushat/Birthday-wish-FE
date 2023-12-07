import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL: string = 'http://localhost:8081/';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any>(`${this.BASE_URL}admin/getAll`);
  }

  getBirthdayEmp(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}admin/birthday`);
  }

  dispatchEvent(userId: number, desc:string): Observable<any> {

    if(!desc){
      desc = "We hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy! Hope your day goes great!"
    }

    return this.http.get(`${this.BASE_URL}sse/sendEvent?userId=${userId}&desc=${desc}`, { observe: 'response', responseType: 'text' });
  }

}
