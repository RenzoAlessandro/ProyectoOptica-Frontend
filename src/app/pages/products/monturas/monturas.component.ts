import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { Options } from 'ng5-slider';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedeService } from 'src/app/services/sede.service';
import { SedesModel } from 'src/models/sedes';

@Component({
  selector: 'app-monturas',
  templateUrl: './monturas.component.html',
  styleUrls: ['./monturas.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class MonturasComponent implements OnInit {
  
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
  isMasterSel:boolean = false;

  //formulario monturas
  formMontura: FormGroup;
  material_montura: string = "campoMaterialMontura";
  marca_montura: string = "campoMarcaMontura";
  codigo_montura: string = "campoCodigoMontura";
  talla_montura: string = "campoTallaMontura";
  color_montura: string = "campoColorMontura";
  cantidad_montura: string = "campoCantidadMontura";
  precio_compra_montura: string = "campoCompraMontura";
  precio_venta_montura: string = "campoVentaMontura";

  //formulario etiquetas
  formEtiquetaMonturas: FormGroup;
  nEtiquetasMonturas: string = "campoNEtiquetasMonturas";

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
  listSedes: Array<SedesModel>;
  constructor(public service: CustomerService,
    private monturaService: ProductosService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private sedeService: SedeService,
    ) {
    this.monturas$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Monturas', active: true }];
    this.service.customers$.subscribe(res=> {
      this.listMonturas = res;
    })
    this.getListSedes();
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
      ]]
    })

    this.formEtiquetaMonturas = this.fb.group({
      [this.nEtiquetasMonturas]: [null, [
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
    return this.formMontura.get(campo);
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

    this.montura.id_montura = data.id_montura;
    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res => {
      this.listSedes = res;
    });
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
      console.log(this.montura);
      Sweetalert("loading", "Cargando...");
      this.monturaService.updateMontura(this.montura.id_montura,this.montura).subscribe(res => {
        this.modalService.dismissAll();
        Sweetalert("close",null);
        Sweetalert("success","Montura guardada");
        this.updateListMonturas();
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
        this.monturaService.darBajaMontura(data.id_montura).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Montura eliminada");
          console.log("Montura borrado");
          this.updateListMonturas();
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

  updateListMonturas() {
    this.monturaService.getMonturas().subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  /**
 * Returns form Editar Monturas
 */
  get formEM() {
    return this.formMontura.controls;
  }

  loadPage(event:any) {
    this.isMasterSel = false;
  }

  checkUncheckAll(){
    console.log(this.isMasterSel)
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
      console.log(element);
      element.forEach(elem => {
        if (elem.isSelected) {
          this.checkedMonturasList.push(elem);
        }
      })
     
    }); 
    console.log(this.checkedMonturasList)
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
			pdf.save("Monturas_"+nombreSede.nombre_sede+".pdf");
    }); 
  }


  selectEvent(item: any) { }
  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
}