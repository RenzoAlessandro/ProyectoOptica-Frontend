import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
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
}
