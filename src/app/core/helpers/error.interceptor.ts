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

            switch (err.status) {

                case 401:
                    Sweetalert("close", null);
                    Sweetalert("error", err.error);
                    this.usuarioService.logOut();
                    break;
                case 400:
                    Sweetalert("close", null);
                    Sweetalert("error", err.error.message);
                    break;
                case 500:
                    Sweetalert("close", null);
                    Sweetalert("error", err.error.message);
                    break;
                default:
                    break;
            }

            const error = err.error.message || err.statusText;
            return throwError(error);

        }));
    }
}
