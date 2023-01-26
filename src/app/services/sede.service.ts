import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SedesModel } from 'src/models/sedes';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  _listSedes$ = new BehaviorSubject<Array<SedesModel>>([]);
  constructor(
    private http: HttpClient
  ) { }

  get listSedes$() { return this._listSedes$.asObservable();}

  getSedes(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllSedes');
  }

  createSede(sede:SedesModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewSede',sede);
  }
}
