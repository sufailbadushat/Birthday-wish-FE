import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AllEmployessComponent } from './component/all-employess/all-employess.component';
import { BirthdayComponent } from './component/birthday/birthday.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'all-emp', component:AllEmployessComponent},
  {path:'profile', component:ProfileComponent},
  {path:'birthday', component:BirthdayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
