import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
