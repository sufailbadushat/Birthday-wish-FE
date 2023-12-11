import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Role } from 'src/app/model/role';
import { AuthService } from 'src/app/service/auth.service';
import { SseService } from 'src/app/service/sse.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  id:number;

  constructor(private auth: AuthService,
    private toast: NgToastService, private sse: SseService) {
      this.id=auth.getUser().id;      
  }

  logOut() {
    this.sse.unSubscribeEvent(); // closing the sse event
    this.auth.logOut();
    this.toast.success({ detail: "SUCCESS", summary: "Logout sucessful" });
  }

  get isAdmin() {
    return this.auth.getRole() === Role.ADMIN;
  }

}
