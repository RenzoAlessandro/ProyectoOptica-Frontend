import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }
  getMonturas(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllMonturas');
  }
  getAccesorios(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllAccesorios');
  }
  getLunas(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllLunas');
  }
  createUsers(producto:any): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewUser',producto);
  }

  updateUsers(idUser:any): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editClientById/', idUser);
  }
}
