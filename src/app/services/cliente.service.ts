import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomersModel } from 'src/models/customer';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }
  createCustomers(customer:CustomersModel): Observable<any> {
    return this.http.post<any>(environment.urlBackend+'createNewClient', customer);
  }

  getAllClients(): Observable<any> {
    return this.http.get<any>(environment.urlBackend+'getAllClients');
  }
}
