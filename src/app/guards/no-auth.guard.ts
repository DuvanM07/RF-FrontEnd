import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router = inject( Router );

  return authService.verifyAuthenticatedUser()
    .pipe(
      map( isAuthenticated => {
        if ( isAuthenticated ) {
          router.navigate([ '/dashboard' ]);      // Usuario autenticado, redirige a dashboard

          return false;                           // Usuario autenticado, bloquea el acceso
        }

        return true;                              // Usuario NO autenticado, permite el acceso
      }),
      catchError(() => {
        router.navigate([ '/' ]);                 // Usuario autenticado, redirige a home

        // [valor] equivale a of( valor )
        return [ false ];   // Si hay error, bloquea el acceso
      })
  );
};
