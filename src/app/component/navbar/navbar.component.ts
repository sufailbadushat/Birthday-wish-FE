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



  constructor(private auth: AuthService,
    private toast: NgToastService, private sse: SseService) {

  }

  logOut() {
    // this.sse.unSubscribe(); // closing the sse event
    this.auth.logOut();
    this.toast.success({ detail: "SUCCESS", summary: "Logout sucessful" });
  }

  get isAdmin() {
    return this.auth.getRole() === Role.ADMIN;
  }

}
