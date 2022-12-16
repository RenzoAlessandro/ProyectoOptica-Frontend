import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { TransactionService } from './sale.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { VentasModel } from 'src/models/venta';
import Spanish from 'flatpickr/dist/l10n/es.js';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VentaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';
import { Sweetalert } from 'src/utils/sweetalert';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss'],
  providers: [TransactionService, DecimalPipe]
})

export class ListSalesComponent implements OnInit {

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
    private ventasService: VentaService
    ) {
    this.transactions$ = service.transactions$;
    console.log(this.transactions$)
    this.total$ = service.total$;
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

  crearFormulario() {
    this.formDateRange = this.fb.group({
      [this.fechaDesde]:[],
      [this.fechaHasta]:[]
    })
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
}
