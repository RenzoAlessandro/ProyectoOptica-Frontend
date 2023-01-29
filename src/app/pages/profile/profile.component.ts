import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Contacto Visual' }, { label: 'Perfil', active: true }];
  }

  /**
   * Open center modal
   * @param centerDataModalChangePassword center modal data
   */
  centerModalChangePassword(centerDataModalChangePassword: any) {
    this.modalService.open(centerDataModalChangePassword, { centered: true, windowClass: 'modal-holder' });
  }

  /**
   * Close event modal
   */
    closeEventModal() {
      this.modalService.dismissAll();
    }
}
