import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  public user:any =[];
  constructor(private auth:AuthService) { 
    this.user = this.auth.getUser();
  }
  ngOnInit() {
  }
  
}
