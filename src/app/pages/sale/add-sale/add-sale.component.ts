import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {Venta} from './addsale.model';
import {AddsaleService} from './addsale.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss'],
  providers: [AddsaleService, DecimalPipe]
})
export class AddSaleComponent implements OnInit {


  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  addsales$: Observable<Venta[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: AddsaleService) {
    this.addsales$ = service.Addsales$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'addsales', active: true }];
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
}
