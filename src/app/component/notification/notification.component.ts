import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  user!: any;
  name!: any;

  birthdayMsg: any;

  constructor(private auth: AuthService) {
    this.user = auth.getUser();    
  }

  ngOnInit(){
    // this.birthdayMsg = localStorage.getItem("msg");
    // console.log(this.birthdayMsg);
  }
}
