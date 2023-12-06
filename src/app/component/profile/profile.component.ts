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
  msg!: string;

  messages: string[] = [];

  constructor(
    private auth: AuthService,
    private sse: SseService,
    private toast: NgToastService
  ) {
    this.user = this.auth.getUser();
    
  }
  ngOnInit() {
    this.sse.eventSubscribe(this.user.id).subscribe((msg) => {
      this.messages.push(msg);
      this.msg = msg;
      this.toast.info({ detail: "Notification", summary: this.user.name + ", You have a message!" })
    })
  }


  // ngOnDestroy() {
  //   this.sse.unSubscribe();
  // }

}
