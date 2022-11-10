import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {Users} from './users.model';
import {CustomerService} from './users.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class UsersComponent implements OnInit {

    // bread crumb items
    breadCrumbItems: Array<{}>;
    term: any;
  
    customers$: Observable<Users[]>;
    total$: Observable<number>;
  
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  

  constructor(public service: CustomerService) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Customers', active: true }];
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