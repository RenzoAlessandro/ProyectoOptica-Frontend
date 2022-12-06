import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap'

import {Venta} from './addsale.model';
import {AddsaleService} from './addsale.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import { ProductosService } from 'src/app/services/productos.service';
import { VentasModel } from 'src/models/venta';
import { TipoVentaModel } from 'src/models/tipo_venta';
import { MonturasModel } from 'src/models/monturas';

import { Options } from 'ng5-slider';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss'],
  providers: [AddsaleService, DecimalPipe]
})
export class AddSaleComponent implements OnInit {

  formContado: FormGroup;
  submitted_Contado= false;
  cantidadRecibida_Contado: string = "campoCantidadRecibidaContado";
  fechaVenta_Contado: string = "campoFechaVentaContado";
  usuario_Contado: string = "campoUsuarioContado";
  precioTotal_Contado: string = "campoPrecioTotalContado";
  pago_Contado: string = "campoPagoContado";
  cambio_Contado: string = "campoCambioContado";
  observaciones_Contado: string = "campoObservacionesContado";
  metodoPagoContado: string = "campoMetodoPagoContado";

  formCredito: FormGroup;
  cantidadRecibida_Credito: string = "campoCantidadRecibidaCredito";
  fechaVenta_Credito: string = "campoFechaVentaCredito";
  usuario_Credito: string = "campoUsuarioCredito";
  precioTotal_Credito: string = "campoPrecioTotalCredito";
  pago_Credito: string = "campoPagoCredito";
  cambio_Credito: string = "campoCambioCredito";
  observaciones_Credito: string = "campoObservacionesCredito";
  metodoPagoCredito: string = "campoMetodoPagoCredito";

  formEditar: FormGroup;
  precioOriginal_Editar: string = "campoPrecioOriginalEditar";
  fechaCambio_Editar: string = "campoFechaCambioEditar";
  nuevoPrecio_Editar: string = "campoNuevoPrecioEditar";


  // modal
  editEvent: any;

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
  keyword = "marca";
  keywordCliente = "dni";
  products: any = [];
  precioTotalVenta: number;

  venta = new VentasModel;
  tipoPago = new TipoVentaModel;

  activePago = 1;
  selectorPago: string = "contado";
  listMetodosPagos = ['Físico', 'Yape', 'Plin'];
  listClients: any = [];
  

  constructor(public service: AddsaleService, 
    private fb: FormBuilder,
    private modalService: NgbModal,
    private productosService: ProductosService,
    private customerService: ClienteService
    ) {
    this.addsales$ = service.Addsales$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Realizar Venta', active: true }];
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
  centerModal(centerDataModal: any, products: any) {
      this.crearFormulario();
      this.getListClients();
      this.modalService.open(centerDataModal, { centered: true,windowClass:'modal-holder' });
      console.log("modal",products);
      this.f(this.fechaVenta_Contado).setValue(new Date(Date.now()).toLocaleDateString());
      this.f(this.precioTotal_Contado).setValue(this.precioTotalVenta);
      this.g(this.fechaVenta_Credito).setValue(new Date(Date.now()).toLocaleDateString());
      this.g(this.precioTotal_Credito).setValue(this.precioTotalVenta);
      
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
    this.formContado = this.fb.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formContado.valid) {

    }
    this.submitted_Contado = true;
  }


  tickValue = 2;
  tickValueoptions: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 2, legend: 'Mínimo' },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9, legend: 'Máximo' }
    ]
  };
  getListMonturas() {
    this.productosService.getMonturas().subscribe(res => {
      this.listMonturas = res;
      console.log("monturas",this.listMonturas);
    });
  }

  getListAccesorios() {
    this.productosService.getAccesorios().subscribe(res => {
      this.listAccesorios = res;
      console.log("accesorios",this.listAccesorios);
    });
  }

  getListLunas() {
    this.productosService.getLunas().subscribe(res => {
      this.listLunas = res;
      console.log("lunas",this.listLunas);
    });
  }

  getListClients() {
    this.customerService.getAllClients().subscribe(res=> {
      this.listClients = res;
      console.log("clientes",this.listClients);
    })
  }

  selectorProducts(changeEvent: NgbNavChangeEvent) {
    console.log(changeEvent.nextId);
    switch (changeEvent.nextId) {
      case 1:
        this.getListMonturas();
        this.keyword = "marca";
        break;
      case 2:
        this.getListLunas();
        this.keyword = "material";
        break;
      case 3:
        this.getListAccesorios();
        this.keyword = "nombre_accesorio";
      default:
        break;
    }
  }

  selectorMetodoPago(changeEvent: NgbNavChangeEvent) {
    console.log(changeEvent.nextId);
    if (changeEvent.nextId == 1) {
      this.selectorPago = "contado";
    } else {
      this.selectorPago = "credito";
    }
  }
  selectEvent(item:any) {
    console.log(item);

    switch (item.tipo) {
      case 'montura':
        this.products.push({...item, num:1, precio:item.precio_montura_v});
        break;
      case 'luna':
        this.products.push({...item, num:1, precio:item.precio_luna_v});
        break;
      case 'accesorio':
        this.products.push({...item, num:1, precio:item.precio_accesorio_v});
        break;
      default:
        break;
    }
    
    console.log("autocomplete",this.products);
  }

  selectEventCliente(item:any) {
    console.log(item);

    if (this.selectorPago == "contado") {
      this.f(this.usuario_Contado).setValue(item.id_cliente);
    } else {
      this.f(this.usuario_Credito).setValue(item.id_cliente);
    }
    this.venta.nombre_cliente = item.nombres;
    console.log("autocompleteCliente",this.products);
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
    this.precioTotalVenta = this.products.map(t => t.precio).reduce((acc, value) => acc + value, 0);
    return this.precioTotalVenta;
  } 

  /** actualiza el precio por cantidad */
  addQuantityProduct(product,i) {
    console.log(this.products)
    this.products[i].num += 1;
    switch (this.products[i].tipo) {
      case 'montura':
        this.products[i].precio = this.products[i].precio_montura_v*this.products[i].num;
        break;
      case 'luna':
        this.products[i].precio = this.products[i].precio_luna_v*this.products[i].num;
        break;
      case 'accesorio':
        this.products[i].precio = this.products[i].precio_accesorio_v*this.products[i].num;
        break;
      default:
        break;
    }
    
  }

  substractQuantityProduct(product,i) {
    console.log(this.products)
    
    this.products[i].num -= 1;
    switch (this.products[i].tipo) {
      case 'montura':
        this.products[i].precio = this.products[i].precio_montura_v*this.products[i].num;
        break;
      case 'luna':
        this.products[i].precio = this.products[i].precio_luna_v*this.products[i].num;
        break;
      case 'accesorio':
        this.products[i].precio = this.products[i].precio_accesorio_v*this.products[i].num;
        break;
      default:
        break;
    }
    
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
    this.formContado = this.fb.group({
      [this.cantidadRecibida_Contado] : [null],
      [this.fechaVenta_Contado] : [{value: null, disabled: true}],
      [this.usuario_Contado] : [null],
      [this.precioTotal_Contado] : [{value: null, disabled: true}],
      [this.pago_Contado] : [{value: null, disabled: true}],
      [this.cambio_Contado] : [{value: null, disabled: true}],
      [this.observaciones_Contado]: [null],
      [this.metodoPagoContado]:[]
    })

    this.formCredito = this.fb.group({
      [this.cantidadRecibida_Credito] : [null],
      [this.fechaVenta_Credito] : [{value: null, disabled: true}],
      [this.usuario_Credito] : [null],
      [this.precioTotal_Credito] : [{value: null, disabled: true}],
      [this.pago_Credito] : [{value: null, disabled: true}],
      [this.cambio_Credito] : [{value: null, disabled: true}],
      [this.observaciones_Credito]: [null],
      [this.metodoPagoCredito]: []
    })

  }

  f(campo:any){
    return this.formContado.get(campo);
  }

  g(campo:any){
    return this.formCredito.get(campo);
  }

  updatePago(event:any){
    console.log("entre")
    if (this.selectorPago == "contado") {
      this.f(this.pago_Contado).setValue(this.f(this.cantidadRecibida_Contado).value);
      this.f(this.cambio_Contado).setValue( this.f(this.cantidadRecibida_Contado).value - this.precioTotalVenta);
    } else {
      
      this.g(this.pago_Credito).setValue(this.g(this.cantidadRecibida_Credito).value);
      this.g(this.cambio_Credito).setValue( this.g(this.cantidadRecibida_Credito).value - this.precioTotalVenta);
    }
    
  }

  guardarVenta() {
    if (this.formContado.valid) {

      const tempMonturas = this.products.filter(monturas => monturas.tipo == 'montura' );
      const tempLunas = this.products.filter(lunas => lunas.tipo == 'luna' );
      const tempAccesorios = this.products.filter(accesorios => accesorios.tipo == 'accesorio' );
      this.venta.list_monturas = tempMonturas;
      this.venta.list_lunas = tempLunas;
      this.venta.list_accesorios = tempAccesorios;
      if (this.selectorPago == "contado") {
        this.venta.observaciones = this.f(this.observaciones_Contado).value;
        this.venta.fecha_creacion_venta = this.f(this.fechaVenta_Contado).value;
        this.tipoPago.cantidad_recibida = this.f(this.cantidadRecibida_Contado).value;
        this.tipoPago.deuda = this.precioTotalVenta - this.f(this.cantidadRecibida_Contado).value ;
        this.tipoPago.metodo_pago = this.f(this.metodoPagoContado).value;
        this.tipoPago.cuotas = String(0);
      } else {
        this.venta.observaciones = this.g(this.observaciones_Credito).value;
        this.venta.fecha_creacion_venta = this.g(this.fechaVenta_Credito).value;
        this.tipoPago.cantidad_recibida = this.g(this.cantidadRecibida_Credito).value;
        this.tipoPago.deuda = this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value ;
        this.tipoPago.metodo_pago = this.g(this.metodoPagoCredito).value;
        this.tipoPago.cuotas = String(this.tickValue);
      }
      this.venta.id_vendedor = "1234456";
      this.tipoPago.forma_pago = this.selectorPago;
      this.tipoPago.precio_total = this.precioTotalVenta;
      this.tipoPago.fecha_pago = new Date();
      this.venta.tipo_venta.push(this.tipoPago);
      this.venta.id_sede = '1234234';
      this.venta.id_cliente = 'sdfsdff';

      console.log("venta",this.venta);
      /* this.productosService.createVenta(this.venta).subscribe(res =>{
        console.log("venta guardado")
      })  */
    } else {
      
    }
  }  

}
