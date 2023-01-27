import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent implements OnInit {

  selectValue = [];
  selectedValue = '';
  stateValue = [];

  submitted = false;

  formTiendas: FormGroup;
  nombre_tienda: string = "campoNombreTienda";
  direccion_tienda: string = "campoDireccionTienda";
  /* estado_tienda: string = "campoEstadoTienda"; */

  sede= new SedesModel;
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder,
    private sedeService: UsuarioService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Tiendas' }, { label: 'Añadir Tienda', active: true }];

    this.crearFormulario();

    this.selectValue = ['Abierto', 'Cerrado'];
  }

  crearFormulario() {
    this.formTiendas = this.fb.group({
      [this.nombre_tienda]:[null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.direccion_tienda]:[null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]],
      /* [this.estado_tienda]:[], */
    })
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formTiendas.valid) {

    }
    this.submitted = true;
  }

  /**
   * Funcion de ayuda para obtener los valores del formulario
   * @param campo 
   * @returns 
   */
  f(campo:any){
    return this.formTiendas.get(campo);
  }

  /**
   * Funcion para agregar una nueva sede
   */
  guardarSede() {
    if (this.formTiendas.valid) {
      this.sede.direccion = this.f(this.direccion_tienda).value;
      this.sede.fecha_creacion_sede = new Date(Date.now());
      this.sede.nombre_sede = this.f(this.nombre_tienda).value;
      this.sede.habilitado = true;
      this.sede.fecha_modificacion_sede = new Date(Date.now());
      console.log(this.sede);
      this.sedeService.createSedes(this.sede).subscribe( res=>{
        console.log("registrado ok");
      }); 
    } else {
      
    }
  }

  /**
   * Returns form Tienda
   */
  get formT() {
    return this.formTiendas.controls;
  }
        
}
