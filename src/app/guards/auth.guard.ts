import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verifyAuthenticatedUser().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;                  // Usuario autenticado, permite el acceso
      }

      router.navigate(['/login']);  // Usuario NO autenticado, redirige a login

      return false;                 // Usuario NO autenticado, bloquea el acceso
    }),
    catchError(() => {
      router.navigate([ '/' ]);                 // Usuario autenticado, redirige a home

      // [valor] equivale a of( valor )
      return [ false ];   // Si hay error, bloquea el acceso
    })
  );
};
