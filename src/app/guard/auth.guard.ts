import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NgToastService } from 'ng-angular-popup';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const auth = inject(AuthService);
  const toast = inject(NgToastService);

  if (auth.isLoggedIn()) {
    const { roles } = route.data;
    if (roles && !roles.includes(auth.getRole())) {
      router.navigate(['profile']);
      return false;
    }
    return true;
  } else {
    toast.error({ detail: "ERROR", summary: "Please login first!" })
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
   // router.navigate(['login'])
    return false;
  }

};
