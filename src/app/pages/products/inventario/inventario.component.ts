import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { MonturasModel } from 'src/models/monturas';
import { SedesModel } from 'src/models/sedes';
import { Sweetalert } from 'src/utils/sweetalert';
import * as XLSX from 'xlsx';
import saveFile from 'save-as-file';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  providers: [DecimalPipe]
})
export class InventarioComponent implements OnInit {

  mostrarSpinner = false;
  isMasterSel: boolean = false;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  listSedes: Array<SedesModel> = [];
  monturas$: Observable<MonturasModel[]>;
  total$: Observable<number>;
  checkedMonturasList = [];
  listMonturas: Array<MonturasModel>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @ViewChild('autocomplete') autocomplete;
  listAllProducts: Array<any> = [];
  keyword = "id_producto";
  products: any = [];
  formInventario: FormGroup;
  nombre_sedes: string = "campoSede";
  idSede = '';
  monturasList: MonturasModel[] = [];
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private monturasService: ProductosService
  ) {
  }

  ngOnInit(): void {
    Sweetalert("loading", "Cargando...");
    this.getListSedes();
    this.getListMonturas();
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Inventario de Monturas', active: true }];



  }

  getListMonturas() {
    this.monturasService.getProductosbySede(this.usuarioService.getSedebyUser(), 'montura').subscribe(res => {
      Sweetalert("close", null);
      this.listMonturas = res;
      const propiedad = {
        isSelected: false
      }
      this.listMonturas.forEach(elem => {
        Object.assign(elem, propiedad)
      })
      this.mostrarSpinner = true;

    })
  }

  crearFormulario() {
    this.formInventario = this.fb.group({
      [this.nombre_sedes]: [this.idSede]
    })
  }

  fS(campo: string) {
    return this.formInventario.get(campo);
  }

  changeSede() {
    this.products = [];
    this.idSede = this.fS(this.nombre_sedes).value;
    Sweetalert("loading", "Cargando...");
    this.updateListMonturas(this.idSede);
  }

  updateListMonturas(idSede: string) {
    this.monturasService.getProductosbySede(idSede, 'montura').subscribe(res => {
      Sweetalert("close", null);
      this.listMonturas = res;
      const propiedad = {
        isSelected: false
      }
      this.listMonturas.forEach(elem => {
        Object.assign(elem, propiedad)
      })
      this.mostrarSpinner = true;
    })
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();

  }

  removeProduct() {
    this.products = this.products.filter(
      (name) => name.isSelected !== false
    );
  }

  eliminar(product, i) {
    this.products[i].isSelected = false;
    this.removeProduct();
  }

  selectEvent(item: MonturasModel) {
    const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);
    if (!productExistInCart) {
      switch (item.tipo) {
        case 'montura':
          this.products.push({ ...item, isSelected: true });
          this.autocomplete.clear();
          this.autocomplete.close();
          break;
        default:
          break;
      }

    } else {
      Sweetalert("error", "Este producto ya fue registrado");
      this.autocomplete.clear();
      this.autocomplete.close();
      return;
    }
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
    this.autocomplete.close();
  }

  exportarMonturas() {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const listTmp = this.filterArrays(this.listMonturas, this.products)
    this.products.push(...listTmp)
    let data: Array<MonturasModel> = [];
    data = this.products.map((monturas: MonturasModel) => {
      return {
        "ID MONTURA": monturas.id_producto,
        //"ORDEN": monturas.num_orden,
        "TALLA": monturas.talla,
        //"CODIGO INTERNO": monturas.codigo_interno,
        "CODIGO": monturas.codigo,
        "MARCA": monturas.marca,
        "CANTIDAD": monturas.cantidad,
        "COLOR": monturas.color,
        "MATERIAL": monturas.material,
        "INVENTARIO": monturas.isSelected ? 'SI' : 'NO',
        "FECHA INGRESO": new Date(monturas.fecha_creacion_monturas).toLocaleDateString('en-GB')
      }
    })
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = {
      Sheets: {
        'hoja': worksheet
      },
      SheetNames: ['hoja']
    }
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
    const nombreSede = this.listSedes.find(res => (res.id_sede == this.fS(this.nombre_sedes).value));
    saveFile(blobData, 'monturas' + '_' + nombreSede.nombre_sede);
    this.products = [];
  }

  filterArrays(arr1: Array<MonturasModel>, arr2: Array<MonturasModel>): Array<MonturasModel> {
    let res = [];
    res = arr1.filter(el => {
      return !arr2.find(element => {
        return element.id_producto === el.id_producto;
      });
    });
    return res;
  }

}
