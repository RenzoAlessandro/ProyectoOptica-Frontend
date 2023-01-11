import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { CustomerService } from './lunas.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LunasModel } from 'src/models/lunas';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DataMatrixGenerator } from '@syncfusion/ej2-angular-barcode-generator';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-lunas',
  templateUrl: './lunas.component.html',
  styleUrls: ['./lunas.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class LunasComponent implements OnInit {

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

  formLuna: FormGroup;
  material_luna: string = "campoMaterialLuna";
  codigo_luna: string = "campoCodigoLuna";
  cantidad_luna: string = "campoCantidadLuna";
  precio_compra_luna: string = "campoCompraLuna";
  precio_venta_luna: string = "campoVentaLuna";

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  lunas$: Observable<LunasModel[]>;
  total$: Observable<number>;

  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;

  luna = new LunasModel;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  checkedLunasList: any;


  constructor(
    public service: CustomerService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private lunaService: ProductosService
  ) {
    this.lunas$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Lunas', active: true }];
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
    this.f(this.codigo_luna).setValue(data.codigo);
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

  guardarLuna() {
    if (this.formLuna.valid) {
      this.luna.material = this.f(this.material_luna).value;
      this.luna.codigo = this.f(this.codigo_luna).value;
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
    console.log(data)
    this.lunaService.darBajaLuna(data.id_luna).subscribe(res => {
      console.log("montura borrado");
      this.updateListLunas();
    });
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
    var HTML_Width = 150
    var HTML_Height = 29 * cant
		var top_left_margin = 0;
		//var PDF_Width = HTML_Width+(top_left_margin*2);
		//var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
    var PDF_Width = 106
    var PDF_Height = 29 
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;
		
    console.log(HTML_Width, HTML_Height)
		//var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)
    console.log(totalPDFPages)
    html2canvas(DATA).then((canvas) => {

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('l', 'mm',  [PDF_Width, PDF_Height]);
		  pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			pdf.deletePage(1)
			
			for (var i = 0; i < totalPDFPages; i++) { 
				pdf.addPage([PDF_Width, PDF_Height]);
				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
			
		    pdf.save("HTML-Document.pdf");
      /* console.log(canvas)
      let fileWidth = 300;
      let pageHeight = 82;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      let heighLeft = fileHeight;
      const FILEURI = canvas.toDataURL('image/svg');
      
      let PDF = new jsPDF('p', 'mm', [fileWidth,pageHeight]);
      
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight+15);
      
      while (heighLeft >= 0) {
        position = heighLeft - fileHeight;
        console.log(position)
        PDF.addPage();
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight + 15);
        heighLeft -= pageHeight;
      } 
      PDF.save('angular-demo.pdf'); */
    }); 
    
  }
  
  async createPDF() {
    let data = this.barcode.exportAsBase64Image('PNG') ;
    data.then(res=>{
      const pdfDefinition: any = {
        content: [
          {
            text: 'PDF Generated with Image from external URL',
            fontSize : 20
          },
          {
            image: res
          }
        ]
      }
      const pdf = pdfMake.createPdf(pdfDefinition);
      pdf.download();
    }
     
    );
    
  }

  
}