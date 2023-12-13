import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VentasModel } from 'src/models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(    private http: HttpClient
    ) { }
  getVentas(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllVentas');
  }

  getVentasbySede(idSede:string): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllVentasBySede/'+idSede);
  }

  getVentasByDate(fechaIni:any,fechaFin:any, idSede: string): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllVentasByDate/'+fechaIni+'/'+fechaFin+'/'+idSede)
  }

  darBajaVenta(idVenta: string): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'unsubscribeVentasById/'+idVenta,idVenta);
  }

  updatePagoCuotas(idVenta: string, venta:VentasModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'updatePagoCuotasVentaById/'+idVenta,venta);
  }

  getVentasEliminadasbySede(idSede: string): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllVentasEliminadasBySede/'+idSede);
  }

  getPDF(objPDF:any): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'getPDF', objPDF);
  }
}
