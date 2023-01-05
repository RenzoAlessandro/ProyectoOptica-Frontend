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
  submitted = false;

  formMontura: FormGroup;
  material_montura: string = "campoMaterialMontura";
  marca_montura: string = "campoMarcaMontura";
  codigo_montura: string = "campoCodigoMontura";
  talla_montura: string = "campoTallaMontura";
  cantidad_montura: string = "campoCantidadMontura";
  precio_compra_montura: string = "campoCompraMontura";
  precio_venta_montura: string = "campoVentaMontura";
  

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  customers$: Observable<MonturasModel[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

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
      [this.material_montura]: [null, [
        Validators.required
      ]],
      [this.marca_montura]: [null, [
        Validators.required
      ]],
      [this.talla_montura]: [null, [
        Validators.required
      ]],
      [this.codigo_montura]: [null, [
        Validators.required
      ]],
      [this.cantidad_montura]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_montura]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_montura]: [null, [
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
    this.f(this.material_montura).setValue(data.material);
    this.f(this.marca_montura).setValue(data.marca);
    this.f(this.codigo_montura).setValue(data.codigo);
    this.f(this.talla_montura).setValue(data.talla);
    this.f(this.cantidad_montura).setValue(data.cantidad);
    this.f(this.precio_compra_montura).setValue(data.precio_montura_c);
    this.f(this.precio_venta_montura).setValue(data.precio_montura_v);

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
      this.montura.material = this.f(this.material_montura).value;
      this.montura.marca = this.f(this.marca_montura).value;
      this.montura.codigo = this.f(this.codigo_montura).value;
      this.montura.talla = this.f(this.talla_montura).value;
      this.montura.cantidad = Number(this.f(this.cantidad_montura).value);
      this.montura.precio_montura_c = Number(this.f(this.precio_compra_montura).value);
      this.montura.precio_montura_v = Number(this.f(this.precio_venta_montura).value);
      this.montura.fecha_modificacion_monturas = new Date(Date.now());
      console.log(this.montura);
      Sweetalert("loading", "Cargando...");
      this.monturaService.updateMontura(this.montura.id_montura,this.montura).subscribe(res => {
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success","Montura guardada");
        this.updateListMonturas();
      })

    } else {
      
    }
  }

  eliminar(data: MonturasModel) {
    console.log(data)
    this.monturaService.darBajaMontura(data.id_montura).subscribe(res => {
      console.log("montura borrado");
      this.updateListMonturas();
    });
  }

  updateListMonturas() {
    this.monturaService.getMonturas().subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  /**
 * Returns form Editar Monturas
 */
  get formEM() {
    return this.formMontura.controls;
  }
}