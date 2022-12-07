import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesModel } from 'src/models/sedes';

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
}
