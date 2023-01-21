import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { TransactionService } from './sale.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { VentasModel } from 'src/models/venta';
import Spanish from 'flatpickr/dist/l10n/es.js';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { VentaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';
import { Sweetalert } from 'src/utils/sweetalert';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss'],
  providers: [TransactionService, DecimalPipe]
})

export class ListSalesComponent implements OnInit {

  mostrarSpinner = false;

  formCreditoActualizacion: FormGroup;
  submitted_CreditoActualizacion = false;
  cantidadRecibida_CreditoActualizacion: string = "campoCantidadRecibidaCreditoActualizacion";
  fechaVenta_CreditoActualizacion: string = "campoFechaVentaCreditoActualizacion";
  usuario_CreditoActualizacion: string = "campoUsuarioCreditoActualizacion";
  nombreCreditoActualizacion: string = "campoNombreCreditoActualizacion";
  precioTotal_CreditoActualizacion: string = "campoPrecioTotalCreditoActualizacion";
  pago_CreditoActualizacion: string = "campoPagoCreditoActualizacion";
  cambio_CreditoActualizacion: string = "campoCambioCreditoActualizacion";
  observaciones_CreditoActualizacion: string = "campoObservacionesCreditoActualizacion";
  metodoPagoCreditoActualizacion: string = "campoMetodoPagoCreditoActualizacion";

  numberPattern = '[0-9]+';
  fechaVenta: Date;
  precioTotalVenta: number;

  activePago = 1;
  listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];

  // rango de fecha
  exampleOptions: FlatpickrOptions = {
    altInputClass: 'form-control',
    locale: Spanish.es,
  };

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  transactions$: Observable<VentasModel[]>;
  total$: Observable<number>;

  formDateRange: FormGroup;
  fechaDesde: string = 'campoFechaDesde';
  fechaHasta: string = 'campoFechaHasta';

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public service: TransactionService,
    private fb: FormBuilder,
    private fbActualizar: FormBuilder,
    private ventasService: VentaService,
    private modalService: NgbModal,
    ) {
    this.transactions$ = service.transactions$;
    console.log(this.transactions$)
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Lista de Ventas', active: true }];
    this.crearFormulario();
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
  
  /**
   * Open center modal
   * @param centerDataModalActualizar center modal data
   */
  centerModalActualizar(centerDataModalActualizar: any) {
    this.crearFormularioActualizar();
    this.fechaVenta = new Date(Date.now());
    this.modalService.open(centerDataModalActualizar, { centered: true,windowClass:'modal-holder' });
    this.g(this.fechaVenta_CreditoActualizacion).setValue(this.fechaVenta.toLocaleDateString());
    this.g(this.precioTotal_CreditoActualizacion).setValue(this.precioTotalVenta);
   }
  /**
   * Close event modal
   */
  closeEventModal() {
    /* this.formCreditoActualizacion = this.fb.group({
      title: '',
      category: '',
    }); */
    this.modalService.dismissAll();
  }
  /**
   * Save the event
   */
  saveEvent() {
    if (this.formCreditoActualizacion.valid) {

    }
    this.submitted_CreditoActualizacion = true;
  }

  crearFormulario() {
    this.formDateRange = this.fb.group({
      [this.fechaDesde]:[],
      [this.fechaHasta]:[]
    })
  }

  crearFormularioActualizar() {
    this.formCreditoActualizacion = this.fbActualizar.group({
      [this.cantidadRecibida_CreditoActualizacion]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern),
      ]],
      [this.fechaVenta_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.usuario_CreditoActualizacion]: [null],
      [this.precioTotal_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.pago_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.cambio_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.observaciones_CreditoActualizacion]: [null],
      [this.metodoPagoCreditoActualizacion]: [null, [
        Validators.required
      ]],
      [this.nombreCreditoActualizacion]: [null, [
        Validators.required]],
    })
  }


  g(campo: any) {
    return this.formCreditoActualizacion.get(campo);
  }

  updatePago(event: any) {
    console.log("entre")
      this.g(this.pago_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value);
      this.g(this.cambio_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value - this.precioTotalVenta);
  }

  guardarActualizacionDeuda() {
    if (this.formCreditoActualizacion.valid) {


    } else {

    }
  }
  
  f(campo:any) {
    return this.formDateRange.get(campo);
  }

  filterDateRange() {
    if (this.formDateRange.valid) {
      let fechaIni = this.f(this.fechaDesde).value[0];
      let fechaFin = this.f(this.fechaHasta).value != null ? this.f(this.fechaHasta).value[0] : new Date(Date.now());
      console.log("fechas",fechaIni,fechaFin)
      this.ventasService.getVentasByDate(fechaIni,fechaFin).subscribe(res=>{
        console.log(res);
        this.service.updateTable(res);
      }) 
    } else {
      return;
    }
  }

  eliminar(data: VentasModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la venta?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.ventasService.darBajaVenta(data.id_ventas).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Venta eliminada");
          console.log("venta borrado");
          this.updateListVentas();
        }, error => {
          Sweetalert("close", null);
          Sweetalert("error", "Error en la conexión");
        },
        );
      }
      else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Venta no eliminada',
          'error'
        );
      }
    }
    );
  }

  updateListVentas() {
    this.ventasService.getVentas().subscribe( res=>{
      this.service.updateTable(res);
    })
  }


}
