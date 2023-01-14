import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  headers = new HttpHeaders().set('Access-Control-Allow-Origin', environment.urlBackend);
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllUsers');
  }

  createUsers(user:UsersModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewUser', user);
  }

  updateUsers(idUser:string,idPersona:string, user:UsersModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editUserById/'+idUser+'/'+idPersona, user);
  }

  getSedes(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllSedes');
  }

  createSedes(sede:SedesModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewSede', sede);
  }

  darBajaUser(idUser:string): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'darBajaUsuarioById/'+idUser,idUser);
  }

  signIn(user:any): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'signIn', user);
  }

  logOut(): void {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
    //return this.http.post<any>(environment.urlBackend+'LogOut', user);
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
