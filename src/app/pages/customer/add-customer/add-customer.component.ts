import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { CustomersModel } from 'src/models/customer';
import { MedidasModel } from 'src/models/medidas';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  selectValue = [];
  selectedValue = '';
  stateValue = [];
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
  email: string = "campoEmail";
  antecedentes: string = "campoAntecedentes";
  direccion: string = "campoDireccion";
  customer = new CustomersModel;
  medidas = new MedidasModel;
  submitted = false;
  fecha_actual: Date;
  constructor(
    private fb: FormBuilder,
    private customerService: ClienteService
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Checkout', active: true }];

    this.selectValue = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola',
      'Anguilla', 'Antarctica', 'Argentina', 'Hawaii', 'California', 'Colombia', 'Congo', 'Dominica', 'Denmark', 'Nevada', 'Oregon',
      'Washington', 'Ecuador', 'Idaho', 'Montana', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Nicaragua', 'New Caledonia', 'North Dakota',
      'Tonga', 'Tunisia', 'Thailand', 'Turkey', 'Illinois', 'Tuvalu', 'Uganda', 'Uruguay', 'United Arab Emirates', 'United Kingdom', 'Venezuela', 'Zimbabwe',
      'Uruguay'];
    this.selectedValue = this.selectValue[0];

    this.stateValue = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Montana', 'Nevada', 'New Mexico', 'New York', 'North Dakota', 'Texas', 'Virginia', 'Wisconsin', 'Wyoming']

    this.crearFormulario();
  }

  crearFormulario() {
    this.fecha_actual = new Date();
    this.formCustomer = this.fb.group({
      [this.nombres]:[null,[
        Validators.required
      ]],
      [this.apellidos]:[null,[
        Validators.required
      ]],
      [this.email]: [null,[
        Validators.email
      ]],
      [this.antecedentes]: [],
      [this.direccion]: [],
      [this.dni]:[null,[
        
      ]],
      [this.telefono]:[],
      [this.fecha_nacimiento]:[],
      [this.fecha_creacion]:[{value: this.fecha_actual.toLocaleString(), disabled: true}],
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

  f(campo:any){
    return this.formCustomer.get(campo);
  }

  /**
   * guarda cliente en la base de datos
   */
   guardarCliente() {
    if(this.formCustomer.valid){
      this.customer.apellidos = this.f(this.apellidos).value;
      this.customer.dni = this.f(this.dni).value;
      this.customer.fecha_creacion = new Date(Date.now());
      this.customer.email = this.f(this.email).value;
      this.customer.fecha_modificacion = new Date(Date.now());
      this.customer.fecha_nacimiento = new Date(Date.now());
      this.customer.nombres = this.f(this.nombres).value;
      this.customer.telefono = this.f(this.telefono).value;
      this.customer.habilitado = true;
      this.customer.antecedentes = this.f(this.antecedentes).value;
      this.customer.direccion = this.f(this.direccion).value;
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
      });
    }
    
  } 
}