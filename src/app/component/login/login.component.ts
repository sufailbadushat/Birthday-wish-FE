import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helper/validateform';
import { AuthService } from 'src/app/service/auth.service';
import { SseService } from 'src/app/service/sse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: NgToastService,
    private sse: SseService) { }

  //  Password view and hide
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }


  ngOnInit() {


    this.loginForm = this.fb.group({
      username: ['admin@gmail.com', Validators.required],
      password: ['admin', Validators.required]
    })
  }

  data: any[] = [];


  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          this.auth.storeToken(res.token);
          this.auth.storeUser(res);
          this.auth.storeRole(res.role);

          //subscribe sse with id
        // this.sse.eventSubscribe(res.id);

          this.toast.success({ detail: "SUCCESS", summary: "Login success", duration: 3000 });
          this.loginForm.reset();
          // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
          this.router.navigate(['profile'])
        },
        error: (err) => {
          localStorage.clear();
          err.error.message ?
            this.toast.error({ detail: "ERROR", summary: err.error.message, duration: 5000 }) :
            this.toast.error({ detail: "ERROR", summary: "Something went wrong!", duration: 3000 });
        },
      });


    } else {
      this.toast.error({ detail: "ERROR", summary: "Please provide required fields!", duration: 5000 });
      ValidateForm.validateAllFields(this.loginForm);
    }
  }


}
