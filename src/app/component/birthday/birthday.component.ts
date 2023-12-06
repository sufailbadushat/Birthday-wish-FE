import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { SseService } from 'src/app/service/sse.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  data: any = [];
  private BASE_URL!: string;


  constructor(
    private api: ApiService,
    private auth: AuthService,
    private sse: SseService,
    private toast: NgToastService
  ) {
    this.BASE_URL = auth.getBaseURL(); //Take backend url from auth service.
  }

  ngOnInit() {

    // Load all birhday emp at the time of component loading.
    this.api.getBirthdayEmp().subscribe((res) => {
      this.data = res;
    })

  }

  sendBirthday(userId: number): void {
    this.api.dispatchEvent(userId).subscribe({
      next: res => {

        res.body === 'Success!' ? this.toast.success({ detail: "SEND WISHES", summary: res.body }):
        this.toast.warning({ detail: "SEND WISHES", summary: 'Employee is not subscribed!' , duration:2000})
        
      },

      error: err => this.toast.error({ detail: "ERROR", summary: err.error })
    })
  }



  // //Send birthday to individual emp based on their id
  // sendBirthday(empId: number) {
  //   console.log(empId);

  //   // this.api.sendBirthday(empId).subscribe((res:any)=>{
  //   //   console.log("Message send ", res);
  //   // })
  // }
}
