import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { CustomerService } from './accesorios.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccesorioModel } from 'src/models/accesorio';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Options } from 'ng5-slider';

import { SedesModel } from 'src/models/sedes';
import { DisplayTextModel } from '@syncfusion/ej2-angular-barcode-generator';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class AccesoriosComponent implements OnInit {

  mostrarSpinner = false;

  visibleSelection = 5;
  visibleBarOptions: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true
  };

  // modal
  editEvent: any;
  submitted = false;

  //formulario accesorios
  formSedes: FormGroup;
  formAccesorios: FormGroup;
  nombre_sedes: string = "campoSede";
  nombre_accesorio: string = "campoNombreAccesorio";
  codigo_accesorio: string = "campoCodigoAccesorio";
  cantidad_accesorio: string = "campoCantidadAccesorio";
  precio_compra_accesorio: string = "campoCompraAccesorio";
  precio_venta_accesorio: string = "campoVentaAccesorio";

  //formulario Imprimir Etiquetas por cada Elemento
  formPrintEtiquetaAccesorio: FormGroup;
  nEtiquetasPorAccesorio: string = "campoNEtiquetasPorAccesorio";

  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  //formulario - seleccionar sede
  formExportar: FormGroup;
  listSedes: Array<SedesModel>;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;

  accesorio = new AccesorioModel;

  checkedAccesoriosList= [];
  accesorios$: Observable<AccesorioModel[]>;
  isMasterSel:boolean = false;
  idSede:string = "";
  individualQR = new  AccesorioModel;
  nQR = 0;

  constructor(
    public service: CustomerService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private accesorioService: ProductosService,
    private usuarioService: UsuarioService
  ) {
    this.accesorios$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.getListSedes();
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Accesorios', active: true }];
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }

  crearFormulario() {
    this.formAccesorios = this.fb.group({
      [this.nombre_accesorio]: [null, [
        Validators.required
      ]],
      [this.codigo_accesorio]:[{value: null, disabled: true}],

      [this.cantidad_accesorio]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_accesorio]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_accesorio]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]]
    });

    this.formPrintEtiquetaAccesorio = this.fb.group({
      [this.nEtiquetasPorAccesorio]: [1, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]]
    });

    this.formSedes = this.fb.group({
      [this.nombre_sedes]: [this.idSede]
    })
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

  f(campo: string) {
    return this.formAccesorios.get(campo);
  }

  fS(campo: string) {
    return this.formSedes.get(campo);
  }
  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any, data: AccesorioModel) {
    console.log(data)
    this.f(this.nombre_accesorio).setValue(data.nombre_accesorio);
    this.f(this.codigo_accesorio).setValue(data.codigo_interno);
    this.f(this.cantidad_accesorio).setValue(data.cantidad);
    this.f(this.precio_compra_accesorio).setValue(data.precio_accesorio_c);
    this.f(this.precio_venta_accesorio).setValue(data.precio_accesorio_v);

    this.accesorio.id_producto = data.id_producto;

    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
  }

  /**
   * Open Large modal
   * @param openDataModal large modal data
   */
  openModalEtiqueta(openDataModal: any, data:AccesorioModel) {
    this.individualQR = data;
    this.nQR = Number(this.fEA(this.nEtiquetasPorAccesorio).value);
    this.modalService.open(openDataModal, { windowClass:'modal-holder', centered: true, scrollable: true });
  }

  /**
   * Open scroll modal
   * @param scrollDataModal scroll modal data
   */
  openScrollModal(scrollDataModal: any) {
    this.modalService.open(scrollDataModal, { scrollable: true });
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
    this.fEA(this.nEtiquetasPorAccesorio).setValue(1);
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formAccesorios.valid) {

    }
    this.submitted = true;
  }

  generarEtiqueta() {
    this.nQR = Number(this.fEA(this.nEtiquetasPorAccesorio).value)
  }

  fEA(campo:string) {
    return this.formPrintEtiquetaAccesorio.get(campo);
  }

  public displayTextMethod: DisplayTextModel = {
    visibility: false
  };

  loadPage(event:any) {
    this.isMasterSel = false;
  }


  eliminar(data: AccesorioModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar el accesorio?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.accesorioService.darBajaAccesorio(data.id_producto).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Accesorio eliminado");
          console.log("montura borrado");
          this.updateListAccesorios(this.idSede);
        }, error => {
          Sweetalert("close", null);
          Sweetalert("error", "Error en la conexión");
        },
        );
      }
      else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Accesorio no eliminado',
          'error'
        );
      }
    }
    );
  }


  guardarAccesorio() {
    if (this.formAccesorios.valid) {
      this.accesorio.nombre_accesorio = this.f(this.nombre_accesorio).value;
      //this.accesorio.codigo = this.f(this.codigo_accesorio).value;
      this.accesorio.cantidad = Number(this.f(this.cantidad_accesorio).value);
      this.accesorio.precio_accesorio_c = Number(this.f(this.precio_compra_accesorio).value);
      this.accesorio.precio_accesorio_v = Number(this.f(this.precio_venta_accesorio).value);
      this.accesorio.fecha_modificacion_accesorio = new Date(Date.now());

      console.log(this.accesorio);
      Sweetalert("loading", "Cargando...");
      this.accesorioService.updateAccesorio(this.accesorio.id_producto, this.accesorio).subscribe(res => {
        console.log("actualizado");
        this.modalService.dismissAll();
        Sweetalert("close", null);
        Sweetalert("success", "Accesorio actualizado");
        this.updateListAccesorios(this.idSede);
      }, error => {
        Sweetalert("close", null);
        Sweetalert("error", "Error en la conexión");
      },
      );

    } else {
      return;
    }
  }

  updateListAccesorios(idSede:string) {
    this.accesorioService.getProductosbySede(idSede,'accesorio').subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  changeSede() {
    this.idSede = this.fS(this.nombre_sedes).value;
    this.updateListAccesorios(this.idSede);
  }

  /**
   * Returns form Accesorios
   */
  get formEA() {
    return this.formAccesorios.controls;
  }

  /**
  * Returns form Print cada Montura
  */
  get formPEA() {
    return this.formPrintEtiquetaAccesorio.controls;
  }

  checkUncheckAll(){
    console.log(this.isMasterSel)
    this.accesorios$.forEach(element => {
      element.forEach(elem => {
        elem.isSelected = this.isMasterSel;
      })
    }); 
    this.getCheckedItemList();  
  }

  getCheckedItemList(){
    this.checkedAccesoriosList = [];
    this.accesorios$.forEach(element => {
      console.log(element);
      element.forEach(elem => {
        if (elem.isSelected) {
          this.checkedAccesoriosList.push(elem);
        }
      })
    }); 
    console.log(this.checkedAccesoriosList)
    //this.checkedLunasList = JSON.stringify(this.checkedLunasList); 
    
  }

  isAllSelected() {
    this.accesorios$.forEach(element =>{
      this.isMasterSel = element.every(function(item:any) {
        return item.isSelected == true;
      })
    })
    this.getCheckedItemList(); 
  } 

  generarPDF(): void{
    Sweetalert("loading",null)
    let cant = this.checkedAccesoriosList.reduce((accumulator, obj)=>{
      return accumulator + obj.cantidad;
    },0)
    let DATA: any = document.getElementById('htmlData');
    console.log(DATA.children.length)
    //var HTML_Width = document.getElementById("htmlData").offsetWidth 
		//var HTML_Height = document.getElementById("htmlData").offsetHeight
    var HTML_Width = 3
    var HTML_Height = 0.57 * cant
		var top_left_margin = 0;
		//var PDF_Width = HTML_Width+(top_left_margin*2);
		//var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    var PDF_Width = 4
    var PDF_Height = 0.57 
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;
		
    console.log(HTML_Width, HTML_Height)
		//var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)
    console.log(totalPDFPages)
    html2canvas(DATA).then((canvas) => {
      const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
      console.log(nombreSede)
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('l', 'in',  [PDF_Width, PDF_Height]);
		  pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			pdf.deletePage(1)
			
			for (var i = 0; i < totalPDFPages; i++) { 
				pdf.addPage([PDF_Width, PDF_Height]);
				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
      Sweetalert("close",null)
			pdf.save("Accesorios_"+nombreSede.nombre_sede+".pdf");
    }); 
    this.closeEventModal();
  }

  printEtiquetaIndividual() {
    Sweetalert("loading",null)
    console.log("entre")
    let DATA: any = document.getElementById('htmlData2');
    console.log(DATA.children.length)
    //var HTML_Width = document.getElementById("htmlData").offsetWidth 
		//var HTML_Height = document.getElementById("htmlData").offsetHeight
    var HTML_Width = 3
    var HTML_Height = 0.57 * this.nQR
		var top_left_margin = 0;
		//var PDF_Width = HTML_Width+(top_left_margin*2);
		//var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    var PDF_Width = 4
    var PDF_Height = 0.57 
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;
		
    console.log(HTML_Width, HTML_Height)
		//var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)
    console.log(totalPDFPages)
    
    html2canvas(DATA).then((canvas) => {
      const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
      console.log(nombreSede)
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('l', 'in',  [PDF_Width, PDF_Height]);
		  pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			pdf.deletePage(1)
			
			for (var i = 0; i < totalPDFPages; i++) { 
				pdf.addPage([PDF_Width, PDF_Height]);
				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
      Sweetalert("close",null)
			pdf.save("Accesorios_"+nombreSede.nombre_sede+".pdf");
    }); 
    this.closeEventModal();
  }
}