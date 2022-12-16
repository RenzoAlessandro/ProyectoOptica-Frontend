import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CustomerService } from './monturas.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MonturasModel } from 'src/models/monturas';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';

@Component({
  selector: 'app-monturas',
  templateUrl: './monturas.component.html',
  styleUrls: ['./monturas.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class MonturasComponent implements OnInit {
  // modal
  editEvent: any;
  formMontura: FormGroup;
  submitted = false;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  customers$: Observable<MonturasModel[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  //formulario
  material: string = "campoMaterial";
  marca: string = "campoMarca";
  codigo: string = "campoCodigo";
  talla: string = "campoTalla";
  cantidad: string = "campoCantidad";
  pCompra: string = "campoPCompra";
  pVenta: string = "campoPVenta";
  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;

  montura = new MonturasModel;

  constructor(public service: CustomerService,
    private monturaService: ProductosService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    ) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Monturas', active: true }];
  }

  crearFormulario() {
    this.formMontura = this.fb.group({
      [this.material]: [null, [
        Validators.required
      ]],
      [this.marca]: [null, [
        Validators.required
      ]],
      [this.talla]: [null, [
        Validators.required
      ]],
      [this.codigo]: [null, [
        Validators.required
      ]],
      [this.cantidad]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.pCompra]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.pVenta]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]]
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
    return this.formMontura.get(campo);
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any, data: MonturasModel) {
    this.f(this.material).setValue(data.material);
    this.f(this.marca).setValue(data.marca);
    this.f(this.codigo).setValue(data.codigo);
    this.f(this.talla).setValue(data.talla);
    this.f(this.cantidad).setValue(data.cantidad);
    this.f(this.pCompra).setValue(data.precio_montura_c);
    this.f(this.pVenta).setValue(data.precio_montura_v);

    this.montura.id_montura = data.id_montura;
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
    this.formMontura = this.fb.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formMontura.valid) {

    }
    this.submitted = true;
  }

  guardarMontura() {
    if (this.formMontura.valid) {
      this.montura.material = this.f(this.material).value;
      this.montura.marca = this.f(this.marca).value;
      this.montura.codigo = this.f(this.codigo).value;
      this.montura.talla = this.f(this.talla).value;
      this.montura.cantidad = Number(this.f(this.cantidad).value);
      this.montura.precio_montura_c = Number(this.f(this.pCompra).value);
      this.montura.precio_montura_v = Number(this.f(this.pVenta).value);
      this.montura.fecha_modificacion_monturas = new Date(Date.now());
      console.log(this.montura);
      Sweetalert("loading", "Cargando...");
      this.monturaService.updateMontura(this.montura.id_montura,this.montura).subscribe(res => {
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success","Montura guardada");
      })

    } else {
      
    }
  }

  eliminar(data: MonturasModel) {
    console.log(data)
    this.monturaService.darBajaMontura(data.id_montura).subscribe(res => {
      console.log("montura borrado");

    });
  }
}