import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CajaService {

  constructor(
    private http: HttpClient
  ) { }

  getIngresos(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllIngresos');
  }
  getEgresos(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllEgresos');
  }
}
