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
import { DataMatrixGenerator } from '@syncfusion/ej2-angular-barcode-generator';
import { Options } from 'ng5-slider';

import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';

import { SedesModel } from 'src/models/sedes';
import { SedeService } from 'src/app/services/sede.service';

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

  @ViewChild('barcode')
   public barcode: DataMatrixGenerator;
  visibleSelection = 5;
  visibleBarOptions: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true
  };

  // modal
  editEvent: any;
  submitted = false;
  isMasterSel: boolean = false;

  //formulario lunas
  formLuna: FormGroup;
  material_luna: string = "campoMaterialLuna";
  codigo_luna: string = "campoCodigoLuna";
  cantidad_luna: string = "campoCantidadLuna";
  precio_compra_luna: string = "campoCompraLuna";
  precio_venta_luna: string = "campoVentaLuna";

  //formulario etiquetas
  formEtiquetaLunas: FormGroup;
  nEtiquetasLunas: string = "campoNEtiquetasLunas";

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

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public service: CustomerService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private lunaService: ProductosService,
    private sedeService: SedeService,
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
    this.sedeService.listSedes$.subscribe( res => {
      this.listSedes = res;
    })
  }

  crearFormulario() {
    this.formLuna = this.fb.group({
      [this.material_luna]: [null, [
        Validators.required
      ]],
      [this.codigo_luna]: [null, [
        Validators.required
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
    })

    this.formEtiquetaLunas = this.fb.group({
      [this.nEtiquetasLunas]: [null, [
        Validators.required
      ]]
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

    this.luna.id_luna = data.id_luna;

    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
  }

  /**
   * Open Large modal
   * @param openDataModal large modal data
   */
  openModalEtiqueta(openDataModal: any) {
    this.modalService.open(openDataModal, { windowClass:'modal-holder', centered: true });
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

      console.log(this.luna);
      Sweetalert("loading", "Cargando...");
      this.lunaService.updateLuna(this.luna.id_luna,this.luna).subscribe(res =>{
        console.log("guardado");
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success",null);
        this.updateListLunas();
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
        this.lunaService.darBajaLuna(data.id_luna).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Luna eliminada");
          console.log("Luna borrado");
          this.updateListLunas();
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

  updateListLunas() {
    this.lunaService.getLunas().subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  /**
  * Returns form Editar Lunas
  */
  get formEL() {
    return this.formLuna.controls;
  }

  checkUncheckAll(){
    console.log(this.isMasterSel)
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
    console.log(this.checkedLunasList)
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

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('l', 'in',  [PDF_Width, PDF_Height]);
		  pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			pdf.deletePage(1)
			
			for (var i = 0; i < totalPDFPages; i++) { 
				pdf.addPage([PDF_Width, PDF_Height]);
				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
			pdf.save("HTML-Document.pdf");
    }); 
  }
}