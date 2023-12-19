import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NgToastModule } from 'ng-angular-popup';
import { AllEmployessComponent } from './component/all-employess/all-employess.component';
import { BirthdayComponent } from './component/birthday/birthday.component';
import { NotificationComponent } from './component/notification/notification.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    AllEmployessComponent,
    BirthdayComponent,
    NotificationComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    ModalModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
