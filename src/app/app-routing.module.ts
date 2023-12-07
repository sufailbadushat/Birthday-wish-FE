import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AllEmployessComponent } from './component/all-employess/all-employess.component';
import { BirthdayComponent } from './component/birthday/birthday.component';
import { authGuard } from './guard/auth.guard';
import { Role } from './model/role';
import { roleGuard } from './guard/role.guard';
import { NotificationComponent } from './component/notification/notification.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'all-emp',
    component: AllEmployessComponent,
    canActivate: [authGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'birthday', component: BirthdayComponent,
    canActivate: [authGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: '**', component: ProfileComponent, canActivate:[authGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
