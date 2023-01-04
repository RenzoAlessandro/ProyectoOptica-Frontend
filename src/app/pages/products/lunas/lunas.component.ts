import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { CustomerService } from './lunas.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LunasModel } from 'src/models/lunas';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
@Component({
  selector: 'app-lunas',
  templateUrl: './lunas.component.html',
  styleUrls: ['./lunas.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class LunasComponent implements OnInit {

  // modal
  editEvent: any;
  submitted = false;

  formLuna: FormGroup;
  material_luna: string = "campoMaterialLuna";
  cantidad_luna: string = "campoCantidadLuna";
  precio_compra_luna: string = "campoCompraLuna";
  precio_venta_luna: string = "campoVentaLuna";

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  customers$: Observable<LunasModel[]>;
  total$: Observable<number>;

  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;

  luna = new LunasModel;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public service: CustomerService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private lunaService: ProductosService
  ) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Lunas', active: true }];
  }

  crearFormulario() {
    this.formLuna = this.fb.group({
      [this.material_luna]: [null, [
        Validators.required
      ]],
      [this.cantidad_luna]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_luna]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_luna]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
    })
  }
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  f(campo:string) {
    return this.formLuna.get(campo);
  }
  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any, data: LunasModel) {
    this.f(this.material_luna).setValue(data.material);
    this.f(this.cantidad_luna).setValue(data.cantidad);
    this.f(this.precio_compra_luna).setValue(data.precio_luna_c);
    this.f(this.precio_venta_luna).setValue(data.precio_luna_v);

    this.luna.id_luna = data.id_luna;

    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
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
  closeEventModal() {
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formLuna.valid) {

    }
    this.submitted = true;
  }

  guardarLuna() {
    if (this.formLuna.valid) {
      this.luna.material = this.f(this.material_luna).value;
      this.luna.cantidad = Number(this.f(this.cantidad_luna).value);
      this.luna.precio_luna_c = Number(this.f(this.precio_compra_luna).value);
      this.luna.precio_luna_v = Number(this.f(this.precio_venta_luna).value);
      this.luna.fecha_modificacion_luna = new Date(Date.now());

      console.log(this.luna);
      Sweetalert("loading", "Cargando...");
      this.lunaService.updateLuna(this.luna.id_luna,this.luna).subscribe(res =>{
        console.log("guardado");
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success",null);
        this.updateListLunas();
      })
    } else {
      
    }
  }

  eliminar(data: LunasModel) {
    console.log(data)
    this.lunaService.darBajaLuna(data.id_luna).subscribe(res => {
      console.log("montura borrado");
      this.updateListLunas();
    });
  }

  updateListLunas() {
    this.lunaService.getLunas().subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  /**
  * Returns form Editar Lunas
  */
  get formEL() {
    return this.formLuna.controls;
  }
}