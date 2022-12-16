import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(    private http: HttpClient
    ) { }
  getVentas(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllVentas');
  }

  getVentasByDate(fechaIni:any,fechaFin:any): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllVentasByDate/'+fechaIni+'/'+fechaFin)
  }

  darBajaVenta(idVenta: string): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'unsubscribeVentasById/'+idVenta,idVenta);
  }
}