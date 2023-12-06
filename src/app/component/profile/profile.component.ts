import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';
import { SseService } from 'src/app/service/sse.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  msg: any;

  birthday:any;

  //messages: string[] = [];

  constructor(
    private auth: AuthService,
    private sse: SseService,
    private toast: NgToastService
  ) {
    this.user = this.auth.getUser();
    
  }
  ngOnInit() {
    this.sse.eventSubscribe(this.user.id).subscribe((msgs:any) => {

      this.msg = JSON.parse(msgs);
      console.log(this.msg.title);
      this.toast.info({ detail: "Notification", summary: this.user.name + ", You have a message!" , duration:6000})
    })
  }


  // ngOnDestroy() {
  //   this.sse.unSubscribe();
  // }

}
