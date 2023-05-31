import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { CustomerService } from './lunas.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LunasModel } from 'src/models/lunas';
import { ProductosService } from 'src/app/services/productos.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';

import { SedesModel } from 'src/models/sedes';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DisplayTextModel } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  selector: 'app-lunas',
  templateUrl: './lunas.component.html',
  styleUrls: ['./lunas.component.scss'],
  providers: [CustomerService, DecimalPipe],
})
export class LunasComponent implements OnInit {

  //formulario - seleccionar sede
  formExportar: FormGroup;
  listSedes: Array<SedesModel>;

  mostrarSpinner = false;

  // modal
  editEvent: any;
  submitted = false;
  isMasterSel: boolean = false;

  //formulario sedes
  formSedes: FormGroup;
  nombre_sedes: string = 'campoSedes';
  //formulario lunas
  formLuna: FormGroup;
  material_luna: string = "campoMaterialLuna";
  codigo_luna: string = "campoCodigoLuna";
  cantidad_luna: string = "campoCantidadLuna";
  precio_compra_luna: string = "campoCompraLuna";
  precio_venta_luna: string = "campoVentaLuna";
  nombre_sedesLuna: string = "campoSedeLuna";

  //formulario Imprimir Etiquetas por cada Elemento
  formPrintEtiquetaLuna: FormGroup;
  nEtiquetasPorLuna: string = "campoNEtiquetasPorLuna";

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  role = "Admin"; 

  lunas$: Observable<LunasModel[]>;
  total$: Observable<number>;

  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;

  luna = new LunasModel;
  checkedLunasList= [];
  idSede = "";

  individualQR = new  LunasModel;
  nQR = 0;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public service: CustomerService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private lunaService: ProductosService,
    private usuarioService: UsuarioService,
  ) {
    this.lunas$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.getListSedes();
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Lunas', active: true }];
  }

  getListSedes() {
      this.listSedes = JSON.parse(localStorage.getItem('sedes'));
      this.idSede = this.usuarioService.getSedebyUser();
  }

  crearFormulario() {
    this.formLuna = this.fb.group({
      [this.material_luna]: [null, [
        Validators.required
      ]],
      [this.codigo_luna]: [null, [
        //Validators.required
      ]],
      [this.cantidad_luna]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_luna]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_luna]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.nombre_sedesLuna]: [this.idSede, [Validators.required]]
    })

    this.formPrintEtiquetaLuna = this.fb.group({
      [this.nEtiquetasPorLuna]: [1, [
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

  f(campo:string) {
    return this.formLuna.get(campo);
  }

  fS(campo: string) {
    return this.formSedes.get(campo);
  }

  changeSede() {
    this.idSede = this.fS(this.nombre_sedes).value;
    this.updateListLunas(this.idSede);
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any, data: LunasModel) {
    this.f(this.material_luna).setValue(data.material);
    //this.f(this.codigo_luna).setValue(data.codigo);
    this.f(this.cantidad_luna).setValue(data.cantidad);
    this.f(this.precio_compra_luna).setValue(data.precio_luna_c);
    this.f(this.precio_venta_luna).setValue(data.precio_luna_v);

    this.luna.id_producto = data.id_producto;

    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
  }

  /**
   * Open modal etiquetas de la tabla
   * @param openDataModal large modal data
   * @param data luna
   */
  openModalEtiqueta(openDataModal: any, data:LunasModel) {
    this.individualQR = data;
    this.nQR = Number(this.fEL(this.nEtiquetasPorLuna).value);
    this.modalService.open(openDataModal, { windowClass:'modal-holder', centered: true });
  }

  public displayTextMethod: DisplayTextModel = {
    visibility: false
  };
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
    this.fEL(this.nEtiquetasPorLuna).setValue(1);
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formLuna.valid) {

    }
    this.submitted = true;
  }

  loadPage(event:any) {
    this.isMasterSel = false;
  }

  guardarLuna() {
    if (this.formLuna.valid) {
      this.luna.material = this.f(this.material_luna).value;
      //this.luna.codigo = this.f(this.codigo_luna).value;
      this.luna.cantidad = Number(this.f(this.cantidad_luna).value);
      this.luna.precio_luna_c = Number(this.f(this.precio_compra_luna).value);
      this.luna.precio_luna_v = Number(this.f(this.precio_venta_luna).value);
      this.luna.fecha_modificacion_luna = new Date(Date.now());
      Sweetalert("loading", "Cargando...");
      this.lunaService.updateLuna(this.luna.id_producto,this.luna).subscribe(res =>{
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success",null);
        this.updateListLunas(this.idSede);
      })
    } else {
      
    }
  }

  eliminar(data: LunasModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la luna?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.lunaService.darBajaLuna(data.id_producto).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Luna eliminada");
          this.updateListLunas(this.idSede);
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
          'Luna no eliminada',
          'error'
        );
      }
    }
    );
  }

  updateListLunas(idSede:string) {
    this.lunaService.getProductosbySede(idSede,'luna').subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  fEL(campo:string) {
    return this.formPrintEtiquetaLuna.get(campo);
  }

  generarEtiqueta() {
    this.nQR = Number(this.fEL(this.nEtiquetasPorLuna).value)
  }

  /**
  * Returns form Editar Lunas
  */
  get formEL() {
    return this.formLuna.controls;
  }

  /**
  * Returns form Print cada Montura
  */
  get formPEL() {
    return this.formPrintEtiquetaLuna.controls;
  }

  checkUncheckAll(){
    this.lunas$.forEach(element => {
      element.forEach(elem => {
        elem.isSelected = this.isMasterSel;
      })
    }); 
    this.getCheckedItemList();  
  }

  getCheckedItemList(){
    this.checkedLunasList = [];
    this.lunas$.forEach(element => {
      element.forEach(elem => {
        if (elem.isSelected) {
          this.checkedLunasList.push(elem);
        }
      })
     
    }); 
    //this.checkedLunasList = JSON.stringify(this.checkedLunasList); 
  }

  isAllSelected() {
    
    this.lunas$.forEach(element =>{
      this.isMasterSel = element.every(function(item:any) {
        return item.isSelected == true;
      })
    })


    this.getCheckedItemList(); 
  } 

  generarPDF(): void{
    let cant = this.checkedLunasList.reduce((accumulator, obj)=>{
      return accumulator + obj.cantidad;
    },0)
    let DATA: any = document.getElementById('htmlData');
    //var HTML_Width = document.getElementById("htmlData").offsetWidth 
		//var HTML_Height = document.getElementById("htmlData").offsetHeight
    var HTML_Width = 2
    var HTML_Height = 0.57 * cant
		var top_left_margin = 0;
		//var PDF_Width = HTML_Width+(top_left_margin*2);
		//var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    var PDF_Width = 4
    var PDF_Height = 0.57 
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;
		
		//var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)
    html2canvas(DATA).then((canvas) => {
      const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('l', 'in',  [PDF_Width, PDF_Height]);
		  pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			pdf.deletePage(1)
			
			for (var i = 0; i < totalPDFPages; i++) { 
				pdf.addPage([PDF_Width, PDF_Height]);
				pdf.addImage(imgData, 'JPG', 0.5, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
			pdf.save("Lunas_"+nombreSede.nombre_sede+".pdf");
    }); 
    this.closeEventModal();
  }

  printEtiquetaIndividual() {
    let DATA: any = document.getElementById('htmlData2');
    //var HTML_Width = document.getElementById("htmlData").offsetWidth 
		//var HTML_Height = document.getElementById("htmlData").offsetHeight
    var HTML_Width = 2
    var HTML_Height = 0.57 * this.nQR
		var top_left_margin = 0;
		//var PDF_Width = HTML_Width+(top_left_margin*2);
		//var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    var PDF_Width = 4
    var PDF_Height = 0.57 
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;

		//var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)
    
    html2canvas(DATA).then((canvas) => {
      const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('l', 'in',  [PDF_Width, PDF_Height]);
		  pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			pdf.deletePage(1)
			
			for (var i = 0; i < totalPDFPages; i++) { 
				pdf.addPage([PDF_Width, PDF_Height]);
				pdf.addImage(imgData, 'JPG', 0.5, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
			pdf.save("Lunas_"+nombreSede.nombre_sede+".pdf");
    }); 
    this.closeEventModal();
  }
}