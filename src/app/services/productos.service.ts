import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccesorioModel } from 'src/models/accesorio';
import { LunasModel } from 'src/models/lunas';
import { MonturasModel } from 'src/models/monturas';
import { VentasModel } from 'src/models/venta';

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
  createAccesorios(accesorio:AccesorioModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewAccesorio',accesorio);
  }
  createMonturas(montura:MonturasModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewMontura',montura);
  }
  createLunas(luna:LunasModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewLuna',luna);
  }

  updateUsers(idUser:any): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editClientById/', idUser);
  }

  createVenta(venta:VentasModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewVenta',venta);
  }

  darBajaMontura(idMontura: string): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'unsubscribeMonturasById/'+idMontura,idMontura);
  }
}
