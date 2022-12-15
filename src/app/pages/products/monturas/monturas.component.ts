import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {CustomerService} from './monturas.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MonturasModel } from 'src/models/monturas';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-monturas',
  templateUrl: './monturas.component.html',
  styleUrls: ['./monturas.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class MonturasComponent implements OnInit {
    // modal
    editEvent: any;
    formData: FormGroup;
    submitted = false;

    // bread crumb items
    breadCrumbItems: Array<{}>;
    term: any;
  
    customers$: Observable<MonturasModel[]>;
    total$: Observable<number>;
  
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  

  constructor(public service: CustomerService,
    private monturaService: ProductosService,
    private modalService: NgbModal, 
    private formBuilder: FormBuilder) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Monturas', active: true }];
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


  eliminar(data:MonturasModel) {
    console.log(data)
    this.monturaService.darBajaMontura(data.id_montura).subscribe(res => {
      console.log("montura borrado");

    });
  }
}