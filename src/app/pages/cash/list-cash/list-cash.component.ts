import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TransactionService } from './registro.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { CajaModel } from 'src/models/caja';


@Component({
  selector: 'app-list-cash',
  templateUrl: './list-cash.component.html',
  styleUrls: ['./list-cash.component.scss'],
  providers: [TransactionService, DecimalPipe]
})
export class ListCashComponent implements OnInit {

  formSedes: FormGroup;
  listSedes: Array<SedesModel>;
  nombre_sedes: string = "campoSede";
  idSede:string = "";

  formDateRange: FormGroup;
  fechaDesde: string = 'campoFechaDesde';
  fechaHasta: string = 'campoFechaHasta';
  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  transactions$: Observable<CajaModel[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private modalService: NgbModal,
    public service: TransactionService,
    private fb: FormBuilder,
    private usuarioService: UsuarioService) {
    this.transactions$ = service.transactions$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Caja' }, { label: 'Lista de Ingresos y Egresos', active: true }];
    this.getListSedes();
    this.crearFormulario();
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }

  crearFormulario() {
    this.formSedes = this.fb.group({
      [this.nombre_sedes]: [this.idSede]
    });

    this.formDateRange = this.fb.group({
      [this.fechaDesde]:[],
    });
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
    this.modalService.open(scrollDataModal, { size: 'lg', centered: true, scrollable: true });
  }

  /**
 * Close event modal
 */
  closeEventModalGeneral() {
    this.modalService.dismissAll();
  }

  f(campo:any) {
    return this.formDateRange.get(campo);
  }

  filterDateRange() {
    if (this.formDateRange.valid) {
      let fechaIni = new Date(this.f(this.fechaDesde).value);
      
      if(this.f(this.fechaHasta).value != null) {
       
      } else {
       
        //fechaFin.setHours(23,59,0)
      }
      //fechaIni.setDate(fechaIni.getDate() - 1)
      /* fechaFin.setDate(fechaFin.getDate() + 1)
      fechaIni.setHours(0,0,0);
      fechaFin.setHours(23,59,0) */
      /* this.ventasService.getVentasByDate(fechaIni,fechaFin).subscribe(res=>{
        this.service.updateTable(res);
      })  */
    } else {
      return;
    }
  }
}
