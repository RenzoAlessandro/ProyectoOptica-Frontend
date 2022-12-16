import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { CustomerService } from './accesorios';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccesorioModel } from 'src/models/accesorio';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class AccesoriosComponent implements OnInit {

  // modal
  editEvent: any;
  formAccesorios: FormGroup;
  submitted = false;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  customers$: Observable<AccesorioModel[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  //formulario
  nombre: string = "campoNombre";
  cantidad: string = "campoCantidad";
  pCompra: string = "campoPCompra";
  pVenta: string = "campoPVenta";

  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;

  accesorio = new AccesorioModel;

  constructor(
    public service: CustomerService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private accesorioService: ProductosService
  ) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Accesorios', active: true }];
  }

  crearFormulario() {
    this.formAccesorios = this.fb.group({
      [this.nombre]: [null, [Validators.required]],
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

  f(campo: string) {
    return this.formAccesorios.get(campo);
  }
  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any, data: AccesorioModel) {
    this.f(this.nombre).setValue(data.nombre_accesorio);
    this.f(this.cantidad).setValue(data.cantidad);
    this.f(this.pCompra).setValue(data.precio_accesorio_c);
    this.f(this.pVenta).setValue(data.precio_accesorio_v);

    this.accesorio.id_accesorio = data.id_accesorio;

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
    if (this.formAccesorios.valid) {

    }
    this.submitted = true;
  }

  eliminar(data: AccesorioModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar el accesorio?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.accesorioService.darBajaAccesorio(data.id_accesorio).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Accesorio eliminado");
          console.log("montura borrado");
          this.updateListAccesorios();
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
          'Accesorio no eliminado',
          'error'
        );
      }
    }
    );
  }


  guardarAccesorio() {
    if (this.formAccesorios.valid) {
      this.accesorio.nombre_accesorio = this.f(this.nombre).value;
      this.accesorio.cantidad = Number(this.f(this.cantidad).value);
      this.accesorio.precio_accesorio_c = Number(this.f(this.pCompra).value);
      this.accesorio.precio_accesorio_v = Number(this.f(this.pVenta).value);
      this.accesorio.fecha_modificacion_accesorio = new Date(Date.now());

      console.log(this.accesorio);
      Sweetalert("loading", "Cargando...");
      this.accesorioService.updateAccesorio(this.accesorio.id_accesorio, this.accesorio).subscribe(res => {
        console.log("actualizado");
        this.modalService.dismissAll();
        Sweetalert("close", null);
        Sweetalert("success", "Accesorio actualizado");
        this.updateListAccesorios();
      }, error => {
        Sweetalert("close", null);
        Sweetalert("error", "Error en la conexión");
      },
      );

    } else {
      return;
    }
  }

  updateListAccesorios() {
    this.accesorioService.getAccesorios().subscribe( res=>{
      this.service.updateTable(res);
    })
  }
}