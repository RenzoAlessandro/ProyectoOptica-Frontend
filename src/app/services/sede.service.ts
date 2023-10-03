import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesModel } from 'src/models/sedes';
import { environmentP } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  constructor(
    private http: HttpClient
  ) { }

  getSedes(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllSedes');
  }

  createSede(sede:SedesModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewSede',sede);
  }

  editSede(sede: SedesModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editSedeById/'+ sede.id_sede,sede);
  }

  getListSedes(): Array<SedesModel> {
    return JSON.parse(localStorage.getItem('sedes'));
  }
  saveImageBackend(file): Observable<any> {
    return this.http.post('src/assets/images',file);
  }
}
