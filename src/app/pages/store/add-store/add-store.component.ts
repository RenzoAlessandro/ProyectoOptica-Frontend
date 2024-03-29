import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { Sweetalert } from '../../../../utils/sweetalert';
import { SedeService } from 'src/app/services/sede.service';


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
  telefono_tienda: string = "campoTelefonoTienda";
  ruc_tienda: string = "campoRucTienda";
  color_tienda: string = "campoColorTienda"

  numberPattern = '^[0-9]+$|^\S*$';

  sede = new SedesModel;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  files: File[] = [];
  constructor(
    private fb: FormBuilder,
    private sedeService: SedeService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Tiendas' }, { label: 'Añadir Tienda', active: true }];

    this.crearFormulario();

    this.selectValue = ['Abierto', 'Cerrado'];
  }

  crearFormulario() {
    this.formTiendas = this.fb.group({
      [this.nombre_tienda]: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.direccion_tienda]: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]],
      [this.telefono_tienda]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.minLength(6),
        Validators.maxLength(9)
      ]],
      [this.ruc_tienda]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.minLength(8),
        Validators.maxLength(11)
      ]],
      [this.color_tienda]: []
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
  f(campo: any) {
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
      this.sede.ruc = this.f(this.ruc_tienda).value;
      this.sede.telefono = this.f(this.telefono_tienda).value;
      this.sede.color = this.f(this.color_tienda).value;
      Sweetalert("loading", "Cargando...");
      let formData = new FormData();
      if (this.files.length != 0) {
        formData.append('photo', this.files[0], this.files[0].name);
        this.sedeService.saveImageBackend(formData).subscribe(res => {
          this.sede.logoURL = res.logoURL;
          this.sede.logoDOWNLOAD = res.logoDOWNLOAD;
          this.sedeService.createSede(this.sede).subscribe(res => {
            this.files = [];
            this.getListSedes();
            Sweetalert("close", null);
            Sweetalert("success", "Tienda guardada");
            this.formTiendas.reset();
          });
        })
      } else {
        this.sedeService.createSede(this.sede).subscribe(res => {
          this.sede.logoURL = null;
          this.sede.logoDOWNLOAD = null;
          this.files = [];
          this.getListSedes();
          Sweetalert("close", null);
          Sweetalert("success", "Tienda guardada");
          this.formTiendas.reset();
        });
      }
      
      


    } else {

    }
  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res=> {
      localStorage.setItem("sedes",JSON.stringify(res));
    })
  } 


  /**
   * Returns form Tienda
   */
  get formT() {
    return this.formTiendas.controls;
  }

  /** funciones del dropzone img */
  onSelect(event) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      //this.errorImagen = "Solo una Imagen";
      this.files = [];
      //console.log(this.files[0].type);
    }
    else {
      //this.errorImagen = "";
    }
  }

  onRemove(event) {
    //this.filebutton = false;
    this.files.splice(this.files.indexOf(event), 1);
  }
}
