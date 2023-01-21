import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  timeout: number;
  authToken: any;
  user: any;
  emit: any;
  tokenSubscription = new Subscription();
  roleAs: string;
  usuario: UsersModel;
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
    this.tokenSubscription.unsubscribe();
    let removeToken = localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  storeUserData(token, user) {
    //this.timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
    //console.log(this.jwtHelper.getTokenExpirationDate(token).valueOf())
    const jwtToken = (JSON.parse(atob(token.split('.')[1]))).exp;
    const expires = new Date(jwtToken * 1000);
    console.log(expires)
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(user))
    //this.authToken = token;
    //this.user = user;
    //this.emit({ username: this.user.username });
    this.expirationCounter(expires);
    this.router.navigate(['dashboard']);
    this.getRole();
  }

  expirationCounter(timeout) {
    this.tokenSubscription.unsubscribe();
    console.log("entre")
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
      console.log('EXPIRED!!');

      this.logOut();
      //this.router.navigate(["/login"]);
    });
  }

  getRole() {
    const user = localStorage.getItem('user');
    this.roleAs = JSON.parse(user).rol;
    console.log(this.roleAs)
    return this.roleAs;
  }

  getSedebyUser() {
    const user = localStorage.getItem('user');
    return JSON.parse(user).id_sede;
  }

  getUser() {
    const user = localStorage.getItem('user');
    this.usuario = JSON.parse(user);
    console.log(this.usuario)
    return this.usuario;
  }
}
