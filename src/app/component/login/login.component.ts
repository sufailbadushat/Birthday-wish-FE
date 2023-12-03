import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helper/validateform';
import { AuthService } from 'src/app/service/auth.service';

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
    private route: Router,
    private toast:NgToastService) { }

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
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  data:any[] =[];


  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.toast.success({detail:"SUCCESS", summary:"Login success", duration:3000});
          this.loginForm.reset();
          this.route.navigate(['profile'])
        },
        error: (err) => {
         this.toast.error({detail:"ERROR", summary:err.error.message, duration: 5000});
        },
      });
    } else {
      ValidateForm.validateAllFields(this.loginForm);
      // alert("Please enter valid fileds");
    }
  }


}
