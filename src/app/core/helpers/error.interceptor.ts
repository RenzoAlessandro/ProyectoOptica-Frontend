import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sweetalert } from 'src/utils/sweetalert';

import { AuthenticationService } from '../services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private usuarioService: UsuarioService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                Sweetalert("close", null);
                Sweetalert("error", err.error);
                console.log(err);
                this.usuarioService.logOut();
                // auto logout if 401 response returned from api
                //this.authenticationService.logout();
                //location.reload();
            } else if (err.status === 400) {
                Sweetalert("close", null);
                Sweetalert("error", err.error.message);
                console.log(err);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
