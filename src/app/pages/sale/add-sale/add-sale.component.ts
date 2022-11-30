import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import {Venta} from './addsale.model';
import {AddsaleService} from './addsale.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss'],
  providers: [AddsaleService, DecimalPipe]
})
export class AddSaleComponent implements OnInit {

  formContado: FormGroup;
  cantidadRecivida_Contado: string = "campoCantidadRecibidaContado";
  fechaRegistro_Contado: string = "campoFechaRegistroContado";
  usuario_Contado: string = "campoUsuarioContado";
  total_Contado: string = "campoTotalContado";
  pago_Contado: string = "campoPagoContado";
  cambio_Contado: string = "campoCambioContado";
  observaciones_Contado: string = "campoObservacionesContado";

  formCredito: FormGroup;
  cantidadRecivida_Credito: string = "campoCantidadRecibidaCredito";
  fechaRegistro_Credito: string = "campoFechaRegistroCredito";
  usuario_Credito: string = "campoUsuarioCredito";
  total_Credito: string = "campoTotalCredito";
  pago_Credito: string = "campoPagoCredito";
  cambio_Credito: string = "campoCambioCredito";
  observaciones_Credito: string = "campoObservacionesCredito";

  formEditar: FormGroup;
  precioOriginal_Editar: string = "campoPrecioOriginalEditar";
  fechaCambio_Editar: string = "campoFechaCambioEditar";
  nuevoPrecio_Editar: string = "campoNuevoPrecioEditar";


  // modal
  editEvent: any;
  formData: FormGroup;
  submitted = false;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  addsales$: Observable<Venta[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: AddsaleService, 
    private fb: FormBuilder,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) {
    this.addsales$ = service.Addsales$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'addsales', active: true }];
    this.crearFormulario();
  }

  crearFormulario() {
    this.formContado = this.fb.group({
      [this.cantidadRecivida_Contado]:[],
      [this.fechaRegistro_Contado]:[],
      [this.usuario_Contado]:[],
      [this.total_Contado]:[],
      [this.pago_Contado]:[],
      [this.cambio_Contado]:[],
      [this.observaciones_Contado]:[],
    })

    this.formCredito = this.fb.group({
      [this.cantidadRecivida_Credito]:[],
      [this.fechaRegistro_Credito]:[],
      [this.usuario_Credito]:[],
      [this.total_Credito]:[],
      [this.pago_Credito]:[],
      [this.cambio_Credito]:[],
      [this.observaciones_Credito]:[],
    })

    this.formEditar = this.fb.group({
      [this.precioOriginal_Editar]:[],
      [this.fechaCambio_Editar]:[],
      [this.nuevoPrecio_Editar]:[],

    })
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
   * Open scroll modal
   * @param scrollDataModal scroll modal data
   */
   scrollModal(scrollDataModal: any) {
    this.modalService.open(scrollDataModal, { size: 'xl', scrollable: true });
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
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formData.valid) {

    }
    this.submitted = true;
  }


  tickValue = 2;
  tickValueoptions: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 2, legend: 'Mínimo' },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9, legend: 'Máximo' }
    ]
  };
}
