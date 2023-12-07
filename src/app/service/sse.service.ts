import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SseService implements OnInit {

  private BASE_URL!: string;

  eventSource!: EventSource;

  // userId!: number;



  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private zone: NgZone
  ) { this.BASE_URL = auth.getBaseURL(); }

  ngOnInit() {
  }




  eventSubscribe(userId: any): Observable<any> {

    // if (this.eventSource == null) {
      this.eventSource = new EventSource(`${this.BASE_URL}sse/subscribe?userId=${userId}`);
      this.eventSource.onopen = (event) => {
        console.log('SSE connection opened:', event);
      };
    // }
    return new Observable(observer => {

      this.eventSource.addEventListener("wish", (event) => {
        observer.next(event.data)
      })

      this.eventSource.onerror = error => {
        observer.error(error);
      };
    });
  }
    // eventSource.onmessage = (event) => {
    //   this.zone.run(() => {
    //     console.log('SSE message received:', event.data);
    //   });
    // };


  unSubscribe() {
    console.log("Event closed!");
    this.eventSource.close();
  }


}
