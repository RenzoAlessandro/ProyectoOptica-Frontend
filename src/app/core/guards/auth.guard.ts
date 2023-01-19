import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';

import { environment } from '../../../environments/environment';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private authFackservice: AuthfakeauthenticationService,
        private usuarioService: UsuarioService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /* if (environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser) {
                // logged in so return true
                return true;
            }
        } else {
            const currentUser = this.authFackservice.currentUserValue;
            if (currentUser) {
                // logged in so return true
                return true;
            }
        } */
        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        /* if (this.usuarioService.isLoggedIn !== true) {
            window.alert("Access not allowed!");
            this.router.navigate(['pages/404'])
          }
          return true; */
          let url: string = state.url;
          return this.checkUserLogin(route, url);
    }

    checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
        if (this.usuarioService.isLoggedIn) {
          const userRole = this.usuarioService.getRole();
          if (route.data.role && route.data.role.indexOf(userRole) === -1) {
            this.router.navigate(['pages/404']);
            return false;
          }
          return true;
        } else {
            window.alert("Access not allowed!");
            this.router.navigate(['pages/404'])
        return false;
        }
    
        
      }
}
