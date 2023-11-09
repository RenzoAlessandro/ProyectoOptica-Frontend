import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { delay } from 'rxjs/operators';
import { SedeService } from './sede.service';

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
  sede: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private sedeService: SedeService
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllUsers');
  }

  createUsers(user:UsersModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewUser', user);
  }

  updateUsers(idUser:string, user:UsersModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editUserById/'+idUser, user);
  }

  getSedes(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllSedes');
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
    localStorage.removeItem('sedes');
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
    const jwtToken = (JSON.parse(atob(token.split('.')[1]))).exp;
    const expires = new Date(jwtToken * 1000);
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(user))
    //this.authToken = token;
    //this.user = user;
    //this.emit({ username: this.user.username });
    this.expirationCounter(expires);
    this.getListSedes();
    this.router.navigate(['home']);
    this.getRole();
  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res=> {
      let idSede = this.getSedebyUser();
    this.sede = res.find(sede => sede.id_sede === idSede);
      console.log(this.sede)
      localStorage.setItem("sedes",JSON.stringify(res));
      localStorage.setItem("logoURL",JSON.stringify(this.sede.logoURL));
    })
  } 

  expirationCounter(timeout) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
      this.logOut();
      //this.router.navigate(["/login"]);
    });
  }

  getRole() {
    const user = localStorage.getItem('user');
    this.roleAs = JSON.parse(user).rol;
    return this.roleAs;
  }

  getSedebyUser():string {
    const user = localStorage.getItem('user');
    return JSON.parse(user).id_sede;
  }

  getUser() {
    const user = localStorage.getItem('user');
    this.usuario = JSON.parse(user);
    return this.usuario;
  }

  changePasswordUser(user:any): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'editContraseniaUserById', user);
  }
}
