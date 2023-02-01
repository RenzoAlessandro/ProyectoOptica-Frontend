import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SedesModel } from 'src/models/sedes';
import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent implements OnInit {

  //formulario monturas
  submitted = false;
  formEditarTiendas: FormGroup;
  nombre_tienda: string = "campoNombreTienda";
  direccion_tienda: string = "campoDireccionTienda";

  mostrar = false;
  // bread crumb items
  breadCrumbItems: Array<{}>;

  listSedes = [];
  sede = new SedesModel
  constructor(
    private modalService: NgbModal,
    private sedeService: SedeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tiendas' }, { label: 'Lista de Tiendas', active: true }];
    this.getListSedes();
  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res => {
      console.log(res)
      this.listSedes = res;
      this.mostrar = true;
    })
  }

  crearFormulario() {
    this.formEditarTiendas = this.fb.group({
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

  get formET() {
    return this.formEditarTiendas.controls;
  }

  /**
   * Open center modal
   * @param DataModalEditStore center modal data
   */
  OpenModalEditStore(DataModalEditStore: any,data:SedesModel) {
    this.crearFormulario();
    console.log(data)
    this.f(this.nombre_tienda).setValue(data.nombre_sede);
    this.f(this.direccion_tienda).setValue(data.direccion);
    this.sede.id_sede = data.id_sede;
    this.modalService.open(DataModalEditStore, { centered: true,windowClass:'modal-holder' });
  }

  /**
   * Close event modal
   */
  closeEventModal() {
    
    this.modalService.dismissAll();
  }
  /**
   * Save the event
   */
  saveEvent() {
    if (this.formEditarTiendas.valid) {

    }
    this.submitted = true;
  }

  /**
   * Funcion de ayuda para obtener los valores del formulario
   * @param campo 
   * @returns 
   */
  f(campo:any){
    return this.formEditarTiendas.get(campo);
  }

  guardarTienda() {
    if (this.formEditarTiendas.valid) {
      
      this.sede.direccion = this.f(this.direccion_tienda).value;
      this.sede.nombre_sede = this.f(this.nombre_tienda).value;
      this.sede.fecha_modificacion_sede = new Date(Date.now());
      console.log(this.sede);
      Sweetalert("loading", "Cargando...");
      this.sedeService.editSede(this.sede).subscribe( res=>{
        console.log("actualizado ok");
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success",null);
        this.getListSedes();
      }); 
    } else {
      return;
    }
  }


  
}
