import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Registro } from './registro';
import { TransactionService } from './registro.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-cash',
  templateUrl: './list-cash.component.html',
  styleUrls: ['./list-cash.component.scss'],
  providers: [TransactionService, DecimalPipe]
})
export class ListCashComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  transactions$: Observable<Registro[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private modalService: NgbModal,
    public service: TransactionService) {
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

  /**
 * Open scroll modal
 * @param scrollDataModal scroll modal data
 */
  scrollModal(scrollDataModal: any) {
    this.modalService.open(scrollDataModal, { size: 'xl', scrollable: true });
  }

  /**
 * Close event modal
 */
  closeEventModalGeneral() {
    this.modalService.dismissAll();
  }

}
