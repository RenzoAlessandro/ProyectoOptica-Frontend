import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { MonturasModel } from 'src/models/monturas';
import { CustomerService } from './inventario.service';
import { SedesModel } from 'src/models/sedes';
import { SedeService } from 'src/app/services/sede.service';
import { Sweetalert } from 'src/utils/sweetalert';
import * as XLSX from 'xlsx';
import saveFile from 'save-as-file';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  providers: [CustomerService, DecimalPipe]
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
  sede: string = "campoSede";

  constructor(
    public service: CustomerService,
    private sedeService: SedeService,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.monturas$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res => {
      this.mostrarSpinner = res;
    })
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Inventario de Monturas', active: true }];
    this.service.customers$.subscribe(res => {
      this.listMonturas = res;
    })
    this.getListSedes();
    this.crearFormulario();
  }

  f(campo: any) {
    return this.formInventario.get(campo);
  }

  crearFormulario() {
    this.formInventario = this.fb.group({
      sede: [this.usuarioService.getSedebyUser()],
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

  getListSedes() {
    this.listSedes = this.sedeService.getListSedes();
  }

  removeProduct() {
    //console.log(this.cartProductList);
    this.products = this.products.filter(
      (name) => name.isSelected !== false
    );
  }

  eliminar(product, i) {
    console.log("entre")
    this.products[i].isSelected = false;
    this.removeProduct();
  }

  selectEvent(item: any) {
    console.log(item);
    const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);

    if (!productExistInCart) {
      this.products.push({ ...item, isSelected: true });
      this.autocomplete.clear();
    } else {
      Sweetalert("error", "Este producto ya fue registrado");
      this.autocomplete.clear();
      return;
    }



    //this.estadoBotonGuardar();
    console.log("autocomplete", this.products);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

  exportarMonturas() {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const listTmp = this.filterArrays(this.listMonturas, this.products)
    console.log(listTmp)
    this.products.push(...listTmp)
    console.log(this.products)
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
    const nombreSede = this.listSedes.find(res => (res.id_sede == this.f('sede').value));
    console.log(nombreSede);
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

  actualizarTabla() {
    this.products = [];
  }
}
