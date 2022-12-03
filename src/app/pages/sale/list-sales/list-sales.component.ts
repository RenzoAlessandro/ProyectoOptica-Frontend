import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { TransactionService } from './sale.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { VentasModel } from 'src/models/venta';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss'],
  providers: [TransactionService, DecimalPipe]
})

export class ListSalesComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  transactions$: Observable<VentasModel[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: TransactionService) {
    this.transactions$ = service.transactions$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Orders', active: true }];
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
}
