import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TransactionService } from './registro.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { ReporteModel } from 'src/models/reporte';
import { CajaService } from 'src/app/services/caja.service';
import { dateMonth } from 'src/utils/functions';


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

  transactions$: Observable<any>;
  total$: Observable<number>;

  reporteCaja= new ReporteModel
  

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private modalService: NgbModal,
    public service: TransactionService,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private cajaService: CajaService) {
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
      [this.fechaDesde]:[ dateMonth(new Date(Date.now()))],
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
  scrollModal(scrollDataModal: any,data:any) {
    this.reporteCaja.fechaCaja = new Date(data.date+'T00:00').toLocaleDateString('en-GB');
    this.reporteCaja.ingreso_total = data.ingreso_total;
    this.reporteCaja.egreso_total = data.egreso_total;
    this.reporteCaja.ingresos = data.caja.filter(el => (el.egreso == false));
    this.reporteCaja.egresos = data.caja.filter(el => (el.egreso == true));

    this.reporteCaja.ingresos.reduce((acc,obj)=> {
      if (obj.metodo_pago == 'Físico') {
        this.reporteCaja.ingresos_fisicos = acc+obj.monto
      } else {
        this.reporteCaja.ingresos_virtuales = acc+obj.monto
      }
    },0);

    this.reporteCaja.egresos.reduce((acc,obj)=> {
      if (obj.metodo_pago == 'Físico') {
        this.reporteCaja.egresos_fisicos = acc+obj.monto
      } else {
        this.reporteCaja.egresos_virtuales = acc+obj.monto
      }
    },0)
    
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
      let fechaIni = new Date(this.f(this.fechaDesde).value+'T00:00');

      let firstDay = new Date(fechaIni.getFullYear(), fechaIni.getMonth(), 1);
      let lastDay = new Date(fechaIni.getFullYear(), fechaIni.getMonth() + 1, 0);
      firstDay.setHours(0, 0, 1);
      lastDay.setHours(23, 59, 0);

      this.updateListCaja(firstDay,lastDay,this.idSede);
    } else {
      return;
    }
  }

  fS(campo: string) {
    return this.formSedes.get(campo);
  }

  changeSedes() {
    this.idSede = this.fS(this.nombre_sedes).value;
    const fIni = new Date(this.f(this.fechaDesde).value + 'T00:00');
    let firstDay = new Date(fIni.getFullYear(), fIni.getMonth(), 1);
    let lastDay = new Date(fIni.getFullYear(), fIni.getMonth() + 1, 0);
    firstDay.setHours(0, 0, 1);
    lastDay.setHours(23, 59, 0);
    this.updateListCaja(firstDay,lastDay,this.idSede);
  }

  updateListCaja(fIni:Date,fFin:Date,idSede:string) {
    this.cajaService.getIngresosEgresosbyMonth(fIni,fFin,idSede).subscribe( res=>{
      const groups = res.reduce((groups, game) => {
        const date = game.fecha_creacion_caja.split(' ')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(game);
        return groups;
      }, {}); 
      
      // Edit: to add it in the array format instead
       const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          caja: groups[date],
        };
      }); 
      
      groupArrays.forEach(element => {
        const ingreso ={
          ingreso_total: 0,
          egreso_total:0
        }
        element.caja.reduce((acc,obj)=>{
          if (obj.egreso) {
            ingreso.egreso_total = acc+obj.monto
          } else {
            ingreso.ingreso_total = acc+obj.monto
          }
        },0);

        Object.assign(element,ingreso)
      });

      this.service.updateTable(groupArrays)
      
    })
  }
}
