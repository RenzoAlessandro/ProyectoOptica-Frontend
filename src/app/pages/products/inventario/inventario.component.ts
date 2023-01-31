import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { MonturasModel } from 'src/models/monturas';
import { CustomerService } from './inventario.service';
import { SedesModel } from 'src/models/sedes';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class InventarioComponent implements OnInit {

  mostrarSpinner = false;
  isMasterSel:boolean = false;
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
  keyword = "codigo_interno";
  products: any = [];

  constructor(
    public service: CustomerService,
    private sedeService: SedeService,
  ) {
    this.monturas$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Inventario de Monturas', active: true }];
    this.service.customers$.subscribe(res=> {
      this.listMonturas = res;
    })
    this.getListSedes();
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
    this.sedeService.getSedes().subscribe(res => {
      this.listSedes = res;
    });
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
  
  selectEvent(item: any) {
    console.log(item);

    switch (item.tipo) {
      case 'montura':
        this.products.push({ ...item, cant_vendida: 1, precio: item.precio_montura_v });
        this.autocomplete.clear();
        break;
      case 'luna':
        this.products.push({ ...item, cant_vendida: 1, precio: item.precio_luna_v });
        this.autocomplete.clear();
        break;
      case 'accesorio':
        this.products.push({ ...item, cant_vendida: 1, precio: item.precio_accesorio_v });
        this.autocomplete.clear();
        break;
      default:
        break;
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

}
