import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  const userFromLocalStorage = localStorage.getItem('user');

  if (userFromLocalStorage) {
    const user = localStorage.getItem('user');
    if (user) {
      auth.currentUser = JSON.parse(user);
    }
    console.log(auth.currentUser);
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const user = localStorage.getItem('user');
  if (!user) {
    return true;
  }
  router.navigate(['/products/view']);
  return false;
};
