import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {Customer} from './customer.model';
import {CustomerService} from './customer.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomersModel } from 'src/models/customer';
import { ClienteService } from 'src/app/services/cliente.service';
import { MedidasModel } from 'src/models/medidas';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class CustomersComponent implements OnInit {

  // modal
  editEvent: any;
  formCustomer: FormGroup;
  nombres: string = "campoNombres";
  apellidos: string = "campoApellidos";
  dni: string = "campoDNI";
  telefono:string = "campoTelefono";
  fecha_nacimiento: string = "campoFechaNacimiento";
  fecha_creacion: string = "campoFechaCreacion";
  od_esferico: string = "campoOdEsferico";
  od_cilindrico: string = "campoOd_Cilindrico";
  od_eje: string = "campoOdEje";
  oi_esferico: string = "campoOiEsferico";
  oi_cilindrico: string = "campoOiCilindrico";
  oi_eje: string = "campoOiEje";
  dip: string = "campoDip";
  add: string = "campoAdd";
  encargado: string = "campoEncargado";
  customer = new CustomersModel;
  medidas = new MedidasModel;
  submitted = false;

  listRoles = [
    { cNombre:1, tNombre: "Admin" },
    { cNombre:2, tNombre: "Vendedor" },
    { cNombre:3, tNombre: "Contador" }
  ];
  listSedes = [
    { cNombre:1, tNombre: "Lima" },
    { cNombre:2, tNombre: "Arequipa" },
    { cNombre:3, tNombre: "Cuzco" }
  ];

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  
  customers$: Observable<Customer[]>;
  total$: Observable<number>;
  
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  

  constructor(public service: CustomerService, 
    private modalService: NgbModal, 
    private fb: FormBuilder,
    private customerService: ClienteService) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Customers', active: true }];
    this.crearFormulario();
  }

  f(campo:any){
    return this.formCustomer.get(campo);
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
     centerModal(centerDataModal: any) {
      this.modalService.open(centerDataModal, { centered: true,windowClass:'modal-holder' });
    }

      /**
   * Delete event
   */
  deleteEventData() {
    this.editEvent.remove();
    this.modalService.dismissAll();
  }

  /**
   * Close event modal
   */
  guardarCliente() {
    if(this.formCustomer.valid){
      this.customer.apellidos = this.f(this.apellidos).value;
      this.customer.dni = Number(this.f(this.dni).value);
      this.customer.fecha_creacion = new Date(Date.now());
      this.customer.fecha_modificacion = new Date(Date.now());
      this.customer.fecha_nacimiento = new Date(Date.now());
      this.customer.nombres = this.f(this.nombres).value;
      this.customer.telefono = this.f(this.telefono).value;


      this.medidas.add = Number(this.f(this.add).value);
      this.medidas.dip = Number(this.f(this.dip).value);
      this.medidas.encargado = this.f(this.encargado).value;
      this.medidas.od_cilindrico = Number(this.f(this.od_cilindrico).value);
      this.medidas.od_eje = Number(this.f(this.od_eje).value);
      this.medidas.od_esferico = Number(this.f(this.od_esferico).value);
      this.medidas.oi_cilindrico = Number(this.f(this.oi_cilindrico).value);
      this.medidas.oi_eje = Number(this.f(this.oi_eje).value);
      this.medidas.oi_esferico = Number(this.f(this.oi_esferico).value); 
      const listaMedidas = []
      listaMedidas.push(this.medidas);
      this.customer.medidas = listaMedidas;
      console.log(this.customer);
      this.customerService.createCustomers(this.customer).subscribe( res=>{
        console.log("registrado ok");
        this.modalService.dismissAll();
      })  
    }
    
  } 

  /**
   * Save the event
   */
  /* saveEvent() {
    if (this.formData.valid) {

    }
    this.submitted = true;
  } */
  crearFormulario() {
    this.formCustomer = this.fb.group({
      [this.nombres]:[],
      [this.apellidos]:[],
      [this.dni]:[],
      [this.telefono]:[],
      [this.fecha_nacimiento]:[],
      [this.fecha_creacion]:[],
      [this.od_cilindrico]:[],
      [this.od_eje]:[],
      [this.od_esferico]:[],
      [this.oi_cilindrico]:[],
      [this.oi_esferico]:[],
      [this.oi_eje]:[],
      [this.dip]:[],
      [this.add]:[],
      [this.encargado]:[],
    })
  }
}