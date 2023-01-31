import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SedeService } from 'src/app/services/sede.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  usuario : UsersModel;
  sede: SedesModel;

  constructor(
    private modalService: NgbModal,
    private usuarioService: UsuarioService,
    private sedeService: SedeService
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUser();
    this.sede = this.sedeService.getListSedes().find((sede:SedesModel)=>(sede.id_sede == this.usuario.id_sede))
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
