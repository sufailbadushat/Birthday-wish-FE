import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const { roles } = route.data;
  const router = inject(Router);
  const auth = inject(AuthService)
  console.log(roles);

  if (roles && !roles.includes(auth.getRole())) {
    return true;
  } else {
    router.navigate(['profile']);
    return false;
  }
};
