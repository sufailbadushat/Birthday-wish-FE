import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  //Pop up property
  modalRef!: BsModalRef;
  form!: FormGroup;
  private currentUserId!: number;
  currentUserName!: string;


  constructor(
    private api: ApiService,
    private auth: AuthService,
    private sse: SseService,
    private toast: NgToastService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      textareaValue: [''],
    });

  }

  ngOnInit() {

    // Load all birhday emp at the time of component loading.
    this.api.getBirthdayEmp().subscribe((res) => {
      this.data = res;
    })

  }

  //Pop up model methods-----------------------------------------------------------------------

  openModal(template: any, empId: number, empName:string) {
    this.currentUserId = empId;
    this.currentUserName = empName;
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {

    const textareaValue = this.form.value.textareaValue
    

    this.api.dispatchEvent(this.currentUserId, textareaValue).subscribe({
      next: res => {

        if (res.body === 'Success!') {
          this.toast.success({ detail: "SEND WISHES", summary: res.body });
          this.modalRef.hide();
          this.form.reset();

        } else {
          this.toast.warning({ detail: "SEND WISHES", summary: `${this.currentUserName} is not subscribed!`, duration: 2000 });
        }
      },

      error: err => {this.toast.error({ detail: "ERROR", summary: "Please login again!" }), console.log(err), this.modalRef.hide()}
      // error: err => {this.toast.error({ detail: "ERROR", summary: err.error })}
    })
  }
  //---------------------------------------------------------------------------------------------


}
