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

  lettersPattern = '[a-zA-Z ]*';
  numberPattern = '^[0-9]+$|^\S*$';

  constructor(
    private fb: FormBuilder,
    private customerService: ClienteService
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Clientes' }, { label: 'Añadir Clientes', active: true }];
    this.crearFormulario();
  }

  crearFormulario() {
    this.fecha_actual = new Date();
    this.formCustomer = this.fb.group({
      [this.nombres]:[null,[
        Validators.required,
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.apellidos]:[null,[
        Validators.required,
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.email]: [null,[
        Validators.email
      ]],
      [this.antecedentes]: [],
      [this.direccion]: [],
      [this.dni]:[null,[
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.min(11111111),
        Validators.max(99999999)
      ]],
      [this.telefono]:[null,[
        Validators.pattern(this.numberPattern),
        Validators.min(111111111),
        Validators.max(999999999)
      ]],
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
      [this.encargado]:[null,[
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.antecedentes]:[]
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
  /**
   * Returns form Cliente
   */
  get formC() {
    return this.formCustomer.controls;
  }
  
}