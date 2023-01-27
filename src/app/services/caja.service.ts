import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CajaModel } from 'src/models/caja';

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
  createIngresoEgreso(caja:CajaModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewIngreso', caja);
  }

  deleteIngresoEgreso(caja: CajaModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'unsubscribeEgresoById/'+ caja.id_caja, caja);
  }
}
