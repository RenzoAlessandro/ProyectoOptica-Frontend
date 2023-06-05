import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CustomerService } from './monturas.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MonturasModel } from 'src/models/monturas';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { DisplayTextModel } from '@syncfusion/ej2-angular-barcode-generator';


@Component({
  selector: 'app-monturas',
  templateUrl: './monturas.component.html',
  styleUrls: ['./monturas.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class MonturasComponent implements OnInit {

  role = "Admin"; 

  //formulario - seleccionar sede
  formExportar: FormGroup;
  
  mostrarSpinner = false;

  // modal
  editEvent: any;
  submitted = false;
  isMasterSel:boolean = false;

  //formulario monturas
  formMontura: FormGroup;
  formSedes: FormGroup;
  nombre_sedes: string = "campoSedes";
  material_montura: string = "campoMaterialMontura";
  marca_montura: string = "campoMarcaMontura";
  codigo_montura: string = "campoCodigoMontura";
  codigo_montura_caja: string = "campoCodigoMonturaCaja";
  talla_montura: string = "campoTallaMontura";
  color_montura: string = "campoColorMontura";
  cantidad_montura: string = "campoCantidadMontura";
  precio_compra_montura: string = "campoCompraMontura";
  precio_venta_montura: string = "campoVentaMontura";
  nombre_sedesMontura: string = "campoSedeMontura";

  //formulario etiquetas
  formEtiquetaMonturas: FormGroup;
  nEtiquetasMonturas: string = "campoNEtiquetasMonturas";

  //formulario Imprimir Etiquetas por cada Elemento
  formPrintEtiquetaMontura: FormGroup;
  nEtiquetasPorMontura: string = "campoNEtiquetasPorMontura";

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  monturas$: Observable<MonturasModel[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;
  lettersPattern = '[a-zA-Z ]*';

  montura = new MonturasModel;
  checkedMonturasList = [];
  keyword = "codigo_interno";
  listMonturas: Array<MonturasModel>;
  listSedes: Array<SedesModel> = [];
  inventarioMonturas: Array<MonturasModel> = [];
  individualQR = new  MonturasModel;
  nQR = 0;
  idSede: string  = "";

  constructor(public service: CustomerService,
    private monturaService: ProductosService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    ) {
    this.monturas$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.getListSedes();
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Monturas', active: true }];
    this.service.customers$.subscribe(res=> {
      this.listMonturas = res;
    })
    
  }


  crearFormulario() {
    this.formMontura = this.fb.group({
      [this.material_montura]: [null, [
        Validators.required
      ]],
      [this.marca_montura]: [null, [
        Validators.required
      ]],
      [this.talla_montura]: [null, [
        Validators.required
      ]],
      [this.color_montura]: [null, [
        Validators.required,
        Validators.pattern(this.lettersPattern)
      ]],
      [this.codigo_montura]: [null, [
        Validators.required
      ]],
      [this.codigo_montura_caja]: [null, [
        Validators.required,
      ]],
      [this.cantidad_montura]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_montura]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_montura]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.nombre_sedesMontura]: [this.idSede, [Validators.required]]
    })

    this.formEtiquetaMonturas = this.fb.group({
      [this.nEtiquetasMonturas]: [null, [
        Validators.required
      ]]
    })

    this.formPrintEtiquetaMontura = this.fb.group({
      [this.nEtiquetasPorMontura]: [1, [
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
    return this.formMontura.get(campo);
  }
  fEM(campo:string) {
    return this.formPrintEtiquetaMontura.get(campo);
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any, data: MonturasModel) {
    this.f(this.material_montura).setValue(data.material);
    this.f(this.marca_montura).setValue(data.marca);
    this.f(this.codigo_montura).setValue(data.codigo);
    this.f(this.talla_montura).setValue(data.talla);
    this.f(this.color_montura).setValue(data.color);
    this.f(this.cantidad_montura).setValue(data.cantidad);
    this.f(this.precio_compra_montura).setValue(data.precio_montura_c);
    this.f(this.precio_venta_montura).setValue(data.precio_montura_v);

    this.montura.id_producto = data.id_producto;
    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
  }

  getListSedes() {
  this.listSedes = JSON.parse(localStorage.getItem('sedes'));
  this.idSede = this.usuarioService.getSedebyUser();
  }
  /**
   * Open Large modal
   * @param openDataModal large modal data
   */
  openModalEtiqueta(openDataModal: any, data:MonturasModel) {
    this.individualQR = data;
    this.nQR = Number(this.fEM(this.nEtiquetasPorMontura).value);
    this.modalService.open(openDataModal, { windowClass:'modal-holder', centered: true, scrollable: true });
  }

  /**
   * Open scroll modal
   * @param openScrollDataModalEtiquetas scroll modal data
   */
  openScrollModalEtiquetas(openScrollDataModalEtiquetas: any) {
    this.modalService.open(openScrollDataModalEtiquetas, { windowClass:'modal-holder', centered: true, scrollable: true });
  }

  /**
   * Open scroll modal
   * @param openScrollDataModalInventario scroll modal data
   */
  openScrollModalInventario(openScrollDataModalInventario: any) {
    this.modalService.open(openScrollDataModalInventario, { size: 'xl', windowClass:'modal-holder', centered: true, scrollable: true });
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
    this.fEM(this.nEtiquetasPorMontura).setValue(1);
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formMontura.valid) {

    }
    this.submitted = true;
  }

  guardarMontura() {
    if (this.formMontura.valid) {
      this.montura.material = this.f(this.material_montura).value;
      this.montura.marca = this.f(this.marca_montura).value;
      this.montura.codigo = this.f(this.codigo_montura).value;
      this.montura.talla = this.f(this.talla_montura).value;
      this.montura.color = this.f(this.color_montura).value;
      this.montura.cantidad = Number(this.f(this.cantidad_montura).value);
      this.montura.precio_montura_c = Number(this.f(this.precio_compra_montura).value);
      this.montura.precio_montura_v = Number(this.f(this.precio_venta_montura).value);
      this.montura.fecha_modificacion_monturas = new Date(Date.now());
      this.montura.idSedeDestino = this.f(this.nombre_sedesMontura).value;
      this.montura.nombreUsuario = this.usuarioService.getUser().nombres + ' ' + this.usuarioService.getUser().apellidos;
      Sweetalert("loading", "Cargando...");
      this.monturaService.updateMontura(this.montura.id_producto,this.montura).subscribe(res => {
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success","Montura guardada");
        this.updateListMonturas(this.idSede);
      })

    } else {
      
    }
  }

  eliminar(data: MonturasModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la montura?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.monturaService.darBajaMontura(data.id_producto).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Montura eliminada");
          this.updateListMonturas(this.idSede);
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
          'Montura no eliminada',
          'error'
        );
      }
    }
    );
  }

  updateListMonturas(idSede:string) {
    this.monturaService.getProductosbySede(idSede,'montura').subscribe( res=>{
      this.service.updateTable(res);
    })
  }

/**
 * Returns form Editar Monturas
 */
get formEM() {
  return this.formMontura.controls;
}
  
/**
* Returns form Print cada Montura
*/
get formPEM() {
  return this.formPrintEtiquetaMontura.controls;
}

  loadPage(event:any) {
    this.isMasterSel = false;
  }

  checkUncheckAll(){
    this.monturas$.forEach(element => {
      element.forEach(elem => {
        elem.isSelected = this.isMasterSel;
      })
    }); 
    this.getCheckedItemList();  
  }

  getCheckedItemList(){
    this.checkedMonturasList = [];
    this.monturas$.forEach(element => {
      element.forEach(elem => {
        if (elem.isSelected) {
          this.checkedMonturasList.push(elem);
        }
      })
     
    }); 
  }

  isAllSelected() {
    this.monturas$.forEach(element =>{
      this.isMasterSel = element.every(function(item:any) {
        return item.isSelected == true;
      })
    })


    this.getCheckedItemList(); 
  } 

  generarPDF(): void{
    let cant = this.checkedMonturasList.reduce((accumulator, obj)=>{
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
			pdf.save("Monturas_"+nombreSede.nombre_sede+".pdf");
    }); 
    this.closeEventModal();
  }

  public displayTextMethod: DisplayTextModel = {
    visibility: false
  };

  fS(campo: string) {
    return this.formSedes.get(campo);
  }

  changeSede() {
    this.idSede = this.fS(this.nombre_sedes).value;
    this.updateListMonturas(this.idSede);
  }

  generarEtiqueta() {
    this.nQR = Number(this.fEM(this.nEtiquetasPorMontura).value)
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
			pdf.save("Monturas_"+nombreSede.nombre_sede+".pdf");
    }); 
    this.closeEventModal();
  }
  
}