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

  /*
  *Obtiene las monturas para las ventas (stock > 0) 
  */
  getMonturasforSale(idSede:string): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllMonturasForVenta/'+idSede);
  }

  /*
  *Obtiene los accesorios para las ventas (stock > 0) 
  */
  getAccesoriosforSale(idSede:string): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllAccesoriosForVenta/'+idSede);
  }

  /*
  *Obtiene lunas para las ventas (stock > 0) 
  */
  getLunasforSale(idSede:string): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllLunasForVenta/'+idSede);
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

  createVenta(venta:VentasModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewVenta',venta);
  }

  darBajaMontura(idMontura: string): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'unsubscribeMonturasById/'+idMontura,idMontura);
  }

  darBajaLuna(idLuna: string): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'unsubscribeLunasById/'+idLuna,idLuna);
  }

  darBajaAccesorio(idAccesorio: string): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'unsubscribeAccesoriosById/'+idAccesorio,idAccesorio);
  }

  updateMontura(idMontura: string, montura:MonturasModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editMonturaById/'+idMontura,montura);
  }

  updateLuna(idLuna: string, luna:LunasModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editLunaById/'+idLuna,luna);
  }

  updateAccesorio(idAccesorio: string, accesorio:AccesorioModel): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'editAccesorioById/'+idAccesorio,accesorio);
  }

  /*
  *Obtiene los productos sin importar el stock por id sede y nombre del producto 
  */
  getProductosbySede(idSede:string, productName: string): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getProductBySede/'+idSede +'/'+productName);
  }

  updateProductsbyExcel(product:Array<any>): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'updateListOfProducts',product);
  }

  createProductsbyExcel(product:Array<any>): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createListOfProducts',product);
  }

  updateSedeofListProducts(nombreUsuario:string, idSede: string, product:Array<any>): Observable<any> {
    return this.http.put<any>(environment.urlBackend+'updateSedeOfProducts/'+nombreUsuario+'/'+idSede,product);
  }

}
