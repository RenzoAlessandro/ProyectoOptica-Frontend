import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { CustomerService } from './listusers.service';
import { NgbdSortableHeader2, SortEvent } from './sortable.directive';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class ListusersComponent implements OnInit {

  // modal
  editEvent: any;
  formData: FormGroup;
  submitted = false;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  customers$: Observable<User[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;


constructor(public service: CustomerService,
  private modalService: NgbModal, 
  private formBuilder: FormBuilder) {
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

}
function ViewChildren(NgbdSortableHeader: any) {
  throw new Error('Function not implemented.');
}

