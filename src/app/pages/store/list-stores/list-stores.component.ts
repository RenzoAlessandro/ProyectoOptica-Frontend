import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

  listSedes: any;

  constructor(
    private modalService: NgbModal,
    private sedeService: SedeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tiendas' }, { label: 'Lista de Tiendas', active: true }];
    this.getListSedes();
    this.crearFormulario();
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
  OpenModalEditStore(DataModalEditStore: any) {
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
  
}
