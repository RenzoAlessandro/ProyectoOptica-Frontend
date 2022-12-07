import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { listData } from './data';

import { InvoiceList } from './list.model';
import { InvoiceService } from './list.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersModel } from 'src/models/user';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss'],
  providers: [InvoiceService, DecimalPipe],
})
export class CashRegisterComponent implements OnInit {
  // modal
  editEvent: any;
  submitted = false;
  formIngreso: FormGroup;
  monto_ingreso: string = "campoMontoIngreso";
  fecha_ingreso: string = "campoFechaIngreso";
  encargado_ingreso: string = "campoEncargadoIngreso";
  descripcion_ingreso: string = "campoDescripcionIngreso";
  formEgreso: FormGroup;
  monto_egreso: string = "campoMontoEgreso";
  fecha_egreso: string = "campoFechaEgreso";
  encargado_egreso: string = "campoEncargadoEgreso";
  descripcion_egreso: string = "campoDescripcionEgreso";
  

  exampleOptions: FlatpickrOptions = {
    defaultDate: '',
    altInputClass: 'form-control'
  };

  // bread crumb items
  breadCrumbItems: Array<{}>;

  defaultDate: '2017-03-15'

  term: any;
  hideme: boolean[] = [];
  listData:InvoiceList[];

  selectedDate;
  invoices$: Observable<InvoiceList[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: InvoiceService,
    private modalService: NgbModal, 
    private formBuilder: FormBuilder) {
    this.invoices$ = service.invoices$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Caja' }, { label: 'Lista', active: true },];
    this.selectedDate = new Date().getDate();
    this._fetchData();
  }

  crearFormulario() {
    this.formIngreso = this.formBuilder.group({
      [this.monto_ingreso]:[],
      [this.fecha_ingreso]:[],
      [this.encargado_ingreso]:[],
      [this.descripcion_ingreso]:[]
    })

    this.formEgreso = this.formBuilder.group({
      [this.monto_egreso]:[],
      [this.fecha_egreso]:[],
      [this.encargado_egreso]:[],
      [this.monto_egreso]:[]
    })
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.listData = listData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
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
   * @param centerDataModal center modal data
   */
   centerModal(centerDataModal: any) {
    this.modalService.open(centerDataModal, { centered: true,windowClass:'modal-holder' });
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
    this.formIngreso = this.formBuilder.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formIngreso.valid) {

    }
    this.submitted = true;
  }
}
