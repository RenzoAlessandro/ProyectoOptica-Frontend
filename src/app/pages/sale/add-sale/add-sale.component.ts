import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap'

import {Venta} from './addsale.model';
import {AddsaleService} from './addsale.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss'],
  providers: [AddsaleService, DecimalPipe]
})
export class AddSaleComponent implements OnInit {

  // modal
  editEvent: any;
  formVenta: FormGroup;
  submitted = false;
  cantidadRecibida: string = "campoCantidadRecibida";
  fechaVenta: string = "campoFechaVenta";
  precioTotal: string = "campoPrecioTotal";
  pago: string = "campoPago";
  cambio: string = "campoCambio";
  observaciones: string = "campoObservaciones";

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  addsales$: Observable<Venta[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  listMonturas: any;
  listAccesorios: any;
  listLunas: any;
  active = 1;
  keyword = 'marca';
  products: any = [];
  constructor(public service: AddsaleService, 
    private modalService: NgbModal,
    private fb: FormBuilder,
    private productosService: ProductosService
    ) {
    this.addsales$ = service.Addsales$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'addsales', active: true }];
    this.getListMonturas();
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any) {
      this.modalService.open(centerDataModal, { centered: true,windowClass:'modal-holder' });
  }
  /**
   * Open scroll modal
   * @param scrollDataModal scroll modal data
   */
   scrollModal(scrollDataModal: any) {
    this.modalService.open(scrollDataModal, { size: 'xl', scrollable: true });
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
    this.formVenta = this.fb.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formVenta.valid) {

    }
    this.submitted = true;
  }

  getListMonturas() {
    this.productosService.getMonturas().subscribe(res => {
      this.listMonturas = res;
      console.log(this.listMonturas);
    });
  }

  getListAccesorios() {
    this.productosService.getAccesorios().subscribe(res => {
      this.listAccesorios = res;
      console.log(this.listAccesorios);
    });
  }

  getListLunas() {
    this.productosService.getLunas().subscribe(res => {
      this.listLunas = res;
      console.log(this.listLunas);
    });
  }

  prueba(changeEvent: NgbNavChangeEvent) {
    console.log(changeEvent.nextId);
    switch (changeEvent.nextId) {
      case 1:
        this.getListMonturas();
        break;
      case 2:
        this.getListLunas();
        break;
      case 3:
        this.getListAccesorios();
      default:
        break;
    }
  }

  selectEvent(item) {
    this.products.push({...item, num:1, precio:item.precio_montura_v});
    console.log(this.products);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

  /** Gets the total cost of all products. */
  getTotalCost() {
    const precioTotal = this.products.map(t => t.precio).reduce((acc, value) => acc + value, 0);
    return precioTotal;
  } 

  /** actualiza el precio por cantidad */
  addQuantityProduct(product,i) {
    console.log(this.products)
    this.products[i].num += 1;
    this.products[i].precio = this.products[i].precio_montura_v*this.products[i].num;
  }

  substractQuantityProduct(product,i) {
    console.log(this.products)
    
    this.products[i].num -= 1;
    this.products[i].precio = this.products[i].precio_montura_v*this.products[i].num;
    if (this.products[i].num === 0) {
      this.removeProduct();
     }
  }
  
  /**
   * Remueve elementos de la lista cuando la cantidad es = 0
   */
  removeProduct() {
    //console.log(this.cartProductList);
    this.products = this.products.filter(
      ( name ) => name.num !== 0
    );
  }

  /**
   * Remueve productos del carrito de compras
   */
  removeCartProduct(product,i){
    console.log("eliminado",this.products)
    this.products[i].num = 0;
    this.removeProduct();
  }

  crearFormulario() {
    this.formVenta = this.fb.group({
      [this.cantidadRecibida] : [],
      [this.fechaVenta] : [],
      [this.precioTotal] : [],
      [this.pago] : [],
      [this.cambio] : [],
      [this.observaciones]: []
    })
  }
}
