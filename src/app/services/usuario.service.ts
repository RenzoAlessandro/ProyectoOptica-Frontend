import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersModel } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllClients');
  }

  createUsers(user:UsersModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewUser', user);
  }

  updateUsers(idUser:any): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editClientById/', idUser);
  }
}
