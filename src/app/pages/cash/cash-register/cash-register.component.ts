import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersModel } from 'src/models/user';
import { CajaModel } from 'src/models/caja';
import { CajaService } from 'src/app/services/caja.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';

import { IngresoService } from './listIngresos.service';
import { EgresoService } from './listEgresos.service';


@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss'],
  providers: [IngresoService, EgresoService, DecimalPipe],
})
export class CashRegisterComponent implements OnInit {

  formSedes: FormGroup;
  listSedes: Array<SedesModel>;
  nombre_sedes: string = "campoSede";
  idSede:string = "";

  // modal
  editEvent: any;
  submitted = false;
  formIngreso: FormGroup;
  monto_ingreso: string = "campoMontoIngreso";
  fecha_ingreso: string = "campoFechaIngreso";
  descripcion_ingreso: string = "campoDescripcionIngreso";
  metodoPagoContado_ingreso: string = "campoMetodoPagoContadoIngreso";

  formEgreso: FormGroup;
  monto_egreso: string = "campoMontoEgreso";
  fecha_egreso: string = "campoFechaEgreso";
  descripcion_egreso: string = "campoDescripcionEgreso";
  metodoPagoContado_egreso: string = "campoMetodoPagoContadoEgreso";

  listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];

  exampleOptions: FlatpickrOptions = {
    defaultDate: '',
    altInputClass: 'form-control'
  };

  // bread crumb items
  breadCrumbItems: Array<{}>;

  defaultDate: '2017-03-15'

  term: any;
  hideme: boolean[] = [];
  listData:CajaModel[];

  selectedDate;
  ingresos$: Observable<CajaModel[]>;
  egresos$: Observable<CajaModel[]>;
  total$: Observable<number>;
  totalE$: Observable<number>;

  caja = new CajaModel;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public serviceI: IngresoService,
    public serviceE: EgresoService,
    private modalService: NgbModal, 
    private formBuilder: FormBuilder,
    private cajaService: CajaService,
    private usuarioService: UsuarioService) {
    this.ingresos$ = serviceI.ingreso$;
    this.total$ = serviceI.totalI$;
    this.egresos$ = serviceE.egresos$;
    this.totalE$ = serviceE.totalE$;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Caja' }, { label: 'Registro de Ingreso y Egreso', active: true },];
    this.getListSedes();
    this.crearFormulario();
    this.selectedDate = new Date().getDate();
    this._fetchData();
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }

  crearFormulario() {
    this.formIngreso = this.formBuilder.group({
      [this.monto_ingreso]:[],
      [this.fecha_ingreso]:[],
      [this.descripcion_ingreso]:[],
      [this.metodoPagoContado_ingreso]:[]
    });

    this.formEgreso = this.formBuilder.group({
      [this.monto_egreso]:[],
      [this.fecha_egreso]:[],
      [this.descripcion_egreso]:[],
      [this.metodoPagoContado_egreso]:[]
    });

    this.formSedes = this.formBuilder.group({
      [this.nombre_sedes]: [this.idSede]
    })
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    //this.listData = listData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSortI({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.serviceI.sortColumnI = column;
    this.serviceI.sortDirectionI = direction;
  }

  onSortE({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.serviceE.sortColumnE = column;
    this.serviceE.sortDirectionE = direction;
  }

  fS(campo: string) {
    return this.formSedes.get(campo);
  }

  changeSede() {
    this.idSede = this.fS(this.nombre_sedes).value;
    this.updateListIngresos(this.idSede);
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
    this.modalService.dismissAll();
  }

  fI(campo:string) {
    return this.formIngreso.get(campo);
  }

  fE(campo:string) {
    return this.formEgreso.get(campo);
  }
  /**
   * Save the event
   */
  guardarIngreso() {
    if (this.formIngreso.valid) {
      this.caja.monto = Number(this.fI(this.monto_ingreso).value);
      this.caja.fecha_creacion_caja = new Date(Date.now());
      this.caja.encargado = this.usuarioService.getUser().id_usuario;
      this.caja.descripcion = this.fI(this.descripcion_ingreso).value;
      this.caja.id_sede = this.usuarioService.getSedebyUser();
      this.caja.habilitado = true;
      this.caja.egreso = false;
      this.caja.metodo_pago = this.fI(this.metodoPagoContado_ingreso).value;
      console.log(this.caja);
     this.cajaService.createIngresoEgreso(this.caja).subscribe(res=>{
        console.log("guardado ingreso");
        this.updateListIngresos(this.idSede)
        this.formIngreso.reset();
        this.modalService.dismissAll();
      }) 
    } else {

    }
    
  }

  guardarEgreso() {
    if (this.formEgreso.valid) {
      this.caja.monto = Number(this.fE(this.monto_egreso).value);
      this.caja.fecha_creacion_caja = new Date(Date.now());
      this.caja.encargado = this.usuarioService.getUser().id_usuario;
      this.caja.descripcion = this.fE(this.descripcion_egreso).value;
      this.caja.id_sede = this.usuarioService.getSedebyUser();
      this.caja.habilitado = true;
      this.caja.egreso = true;
      this.caja.metodo_pago = this.fE(this.metodoPagoContado_egreso).value;
      console.log(this.caja);
     this.cajaService.createIngresoEgreso(this.caja).subscribe(res=>{
        console.log("guardado egreso");
        this.formEgreso.reset();
        this.modalService.dismissAll();
      }) 
    } else {
      
    }
  }

  eliminarIngreso(data:CajaModel) {
    console.log(data)
    this.cajaService.deleteIngresoEgreso(data).subscribe(res=>{
      console.log("eliminado")
      if (data.egreso) {
        
      } else {
        this.updateListIngresos(this.idSede);
      }
      
    })
  }

  updateListIngresos(idSede:string) {
    let fIni: Date = new Date(Date.now());
    fIni.setHours(0,0,1);
    let fFin: Date = new Date(Date.now());
    fFin.setHours(23,59,0);
    this.cajaService.getIngresosbyDate(fIni,fFin,idSede).subscribe(res => {
      this.serviceI.updateTableIngreso(res);
    })
  }
}
