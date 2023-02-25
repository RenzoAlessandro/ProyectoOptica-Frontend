import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap'
import { UsuarioService } from 'src/app/services/usuario.service';
import { Venta } from './addsale.model';
import { AddsaleService } from './addsale.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { ProductosService } from 'src/app/services/productos.service';
import { VentasModel } from 'src/models/venta';
import { TipoVentaModel } from 'src/models/tipo_venta';

import { Options } from 'ng5-slider';
import { ClienteService } from 'src/app/services/cliente.service';

import Swal from 'sweetalert2';
import { Sweetalert } from 'src/utils/sweetalert';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { getBase64ImageFromURL, round } from 'src/utils/functions';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss'],
  providers: [AddsaleService, DecimalPipe]
})
export class AddSaleComponent implements OnInit {

  formContado: FormGroup;
  submitted_Contado = false;
  cantidadRecibida_Contado: string = "campoCantidadRecibidaContado";
  fechaVenta_Contado: string = "campoFechaVentaContado";
  usuario_Contado: string = "campoUsuarioContado";
  nombreContado: string = "campoNombreContado";
  precioTotal_Contado: string = "campoPrecioTotalContado";
  pago_Contado: string = "campoPagoContado";
  cambio_Contado: string = "campoCambioContado";
  observaciones_Contado: string = "campoObservacionesContado";
  metodoPagoContado: string = "campoMetodoPagoContado";

  formCredito: FormGroup;
  cantidadRecibida_Credito: string = "campoCantidadRecibidaCredito";
  fechaVenta_Credito: string = "campoFechaVentaCredito";
  usuario_Credito: string = "campoUsuarioCredito";
  nombreCredito: string = "campoNombreCredito";
  precioTotal_Credito: string = "campoPrecioTotalCredito";
  pago_Credito: string = "campoPagoCredito";
  cambio_Credito: string = "campoCambioCredito";
  observaciones_Credito: string = "campoObservacionesCredito";
  metodoPagoCredito: string = "campoMetodoPagoCredito";

  formEditarPrecio: FormGroup;
  submitted_EditarPrecio = false;
  precioOriginal_Editar: string = "campoPrecioOriginalEditar";
  nuevoPrecio_Editar: string = "campoNuevoPrecioEditar";


  // modal
  editEvent: any;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  addsales$: Observable<Venta[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @ViewChild('autocomplete') autocomplete;
  listAllProducts: Array<any> = [];
  active = 1;
  keyword = "id_producto";
  keywordCliente = "nombres_apellidos";
  products: any = [];
  precioTotalVenta: number;

  venta = new VentasModel;
  tipoPago = new TipoVentaModel;

  activePago = 1;
  selectorPago: string = "contado";
  listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];
  listClients: any = [];

  btnGuardar = false;
  numberPattern = '(^[0-9])+([.][0-9]{1,2})?$';
  decimalPattern = /^\d+(\.\d{1,2})?$/;
  fechaVenta: Date;
  customer: any;
  tmpProducto: any;

  constructor(public service: AddsaleService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private productosService: ProductosService,
    private customerService: ClienteService,
    private usuarioService: UsuarioService
  ) {
    this.addsales$ = service.Addsales$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Realizar Venta', active: true }];
    this.getListMonturas();
    this.crearFormularioEditarPrecio();
  }
  crearFormularioEditarPrecio() {
    this.formEditarPrecio = this.fb.group({
      [this.precioOriginal_Editar]: [{ value: "S/ 000.00", disabled: true }],
      [this.nuevoPrecio_Editar]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern),
      ]],
    })
  }

  fE(campo: string) {
    return this.formEditarPrecio.get(campo);
  }

  crearFormulario() {
    this.formContado = this.fb.group({
      [this.cantidadRecibida_Contado]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern),
      ]],
      [this.fechaVenta_Contado]: [{ value: null, disabled: true }],
      [this.usuario_Contado]: [null],

      [this.precioTotal_Contado]: [{ value: null, disabled: true }],
      [this.pago_Contado]: [{ value: null, disabled: true }],
      [this.cambio_Contado]: [{ value: null, disabled: true }],
      [this.observaciones_Contado]: [null],
      [this.metodoPagoContado]: [null, [
        Validators.required
      ]],
      [this.nombreContado]: [null, [
        Validators.required
      ]]
    })

    this.formCredito = this.fb.group({
      [this.cantidadRecibida_Credito]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern),
      ]],
      [this.fechaVenta_Credito]: [{ value: null, disabled: true }],
      [this.usuario_Credito]: [null],
      [this.precioTotal_Credito]: [{ value: null, disabled: true }],
      [this.pago_Credito]: [{ value: null, disabled: true }],
      [this.cambio_Credito]: [{ value: null, disabled: true }],
      [this.observaciones_Credito]: [null],
      [this.metodoPagoCredito]: [null, [
        Validators.required
      ]],
      [this.nombreCredito]: [null, [
        Validators.required]],
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

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any, products: any) {
    this.crearFormulario();
    this.getListClients();
    this.fechaVenta = new Date(Date.now());
    this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
    this.f(this.fechaVenta_Contado).setValue(this.fechaVenta.toLocaleDateString());
    this.f(this.precioTotal_Contado).setValue(this.precioTotalVenta.toFixed(2));
    this.g(this.fechaVenta_Credito).setValue(this.fechaVenta.toLocaleDateString());
    this.g(this.precioTotal_Credito).setValue(this.precioTotalVenta.toFixed(2));

  }
  /**
   * Open scroll modal
   * @param scrollDataModal scroll modal data
   */
  scrollModal(scrollDataModal: any) {
    this.modalService.open(scrollDataModal, { size: 'xl', scrollable: true });
  }
  /**
   * Open small modal
   * @param DataModalEditarPrecio small modal data
   */
  centerModalEditarPrecio(DataModalEditarPrecio: any, data: any) {
    this.formEditarPrecio.reset();
    this.tmpProducto = data;
    switch (data.tipo) {
      case 'montura':
        this.fE(this.precioOriginal_Editar).setValue(data.precio_montura_v);
        break;
      case 'accesorio':
        this.fE(this.precioOriginal_Editar).setValue(data.precio_accesorio_v);
        break;
      case 'luna':
        this.fE(this.precioOriginal_Editar).setValue(data.precio_luna_v);
        break;
      default:
        break;
    }
    this.modalService.open(DataModalEditarPrecio, { scrollable: true, size: 'md', windowClass: 'modal-holder', centered: true });
  }

  /**
   * Funcion para actualizar el precio unitario según conveniencia
   * 
   */
  actualizarPrecio() {
    let tmpPrecio = Number(this.fE(this.nuevoPrecio_Editar).value);
    switch (this.tmpProducto.tipo) {
      case 'montura':
        this.products.forEach(el => {
          if (el.id_producto == this.tmpProducto.id_producto) {
            el.precio_montura_v = isNaN(tmpPrecio) ? 0 : tmpPrecio;
            el.precio = el.precio_montura_v * el.cant_vendida;
          }
        });
        break;
      case 'accesorio':
        this.products.forEach(el => {
          if (el.id_producto == this.tmpProducto.id_producto) {
            el.precio_accesorio_v = isNaN(tmpPrecio) ? 0 : tmpPrecio;
            el.precio = el.precio_accesorio_v * el.cant_vendida;
          }
        });
        break;
      case 'luna':
        this.products.forEach(el => {
          if (el.id_producto == this.tmpProducto.id_producto) {
            el.precio_luna_v = isNaN(tmpPrecio) ? 0 : tmpPrecio;
            el.precio = el.precio_luna_v * el.cant_vendida;
          }
        });
        break;
      default:
        break;
    }
    this.modalService.dismissAll();
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
    /* this.formContado = this.fb.group({
      title: '',
      category: '',
    }); */
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
      { value: 5, legend: 'Máximo' }
    ]
  };
  getListMonturas() {
    Sweetalert("loading", "Cargando...");
    this.productosService.getMonturasforSale(this.usuarioService.getSedebyUser()).subscribe(res => {
      this.listAllProducts = res;
      this.getListAccesorios()
    });
  }

  getListAccesorios() {
    this.productosService.getAccesoriosforSale(this.usuarioService.getSedebyUser()).subscribe(res => {
      this.listAllProducts = [...res, ...this.listAllProducts];
      this.getListLunas()
    });
  }

  getListLunas() {
    this.productosService.getLunasforSale(this.usuarioService.getSedebyUser()).subscribe(res => {
      this.listAllProducts = [...res, ...this.listAllProducts];
      Sweetalert("close", null);
    });
  }

  getListClients() {
    this.customerService.getAllClientsforSale().subscribe(res => {
      this.listClients = res;
      this.listClients.forEach(element => {
        element.nombres_apellidos = element.apellidos + ' ' + element.nombres;
      });
    })
  }

  selectorProducts(changeEvent: NgbNavChangeEvent) {
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
    if (changeEvent.nextId == 1) {
      this.selectorPago = "contado";
    } else {
      this.selectorPago = "credito";
    }
  }
  selectEvent(item: any) {
    const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);
    if (!productExistInCart) {
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
      this.estadoBotonGuardar();

    } else {
      if (productExistInCart.cant_vendida + 1 > productExistInCart.cantidad) {
        Sweetalert("error", "No se puede agregar más productos del stock");
        this.autocomplete.clear();
        return;
      } else {
        productExistInCart.cant_vendida += 1;
        this.autocomplete.clear();
      }

    }
  }

  selectEventCliente(item: any) {
    this.customer = item;
    if (this.selectorPago == "contado") {
      this.f(this.usuario_Contado).setValue(item.id_cliente);
    } else {
      this.g(this.usuario_Credito).setValue(item.id_cliente);
    }
    this.venta.nombre_cliente = item.nombres + ' ' + item.apellidos;
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
    this.precioTotalVenta = round(this.precioTotalVenta, 1)
    return this.precioTotalVenta;
  }

  /** actualiza el precio por cantidad */
  addQuantityProduct(product, i) {
    if (this.products[i].cant_vendida + 1 > this.products[i].cantidad) {
      Sweetalert("error", "No se puede agregar más productos del stock");
      return;
    } else {
      this.products[i].cant_vendida += 1;
      switch (this.products[i].tipo) {
        case 'montura':
          this.products[i].precio = this.products[i].precio_montura_v * this.products[i].cant_vendida;
          break;
        case 'luna':
          this.products[i].precio = this.products[i].precio_luna_v * this.products[i].cant_vendida;
          break;
        case 'accesorio':
          this.products[i].precio = this.products[i].precio_accesorio_v * this.products[i].cant_vendida;
          break;
        default:
          break;
      }
    }


  }

  substractQuantityProduct(product, i) {
    this.products[i].cant_vendida -= 1;
    switch (this.products[i].tipo) {
      case 'montura':
        this.products[i].precio = this.products[i].precio_montura_v * this.products[i].cant_vendida;
        break;
      case 'luna':
        this.products[i].precio = this.products[i].precio_luna_v * this.products[i].cant_vendida;
        break;
      case 'accesorio':
        this.products[i].precio = this.products[i].precio_accesorio_v * this.products[i].cant_vendida;
        break;
      default:
        break;
    }

    if (this.products[i].cant_vendida === 0) {
      this.removeProduct();
    }
  }

  /**
   * Remueve elementos de la lista cuando la cantidad es = 0
   */
  removeProduct() {
    this.products = this.products.filter(
      (name) => name.cant_vendida !== 0
    );
  }

  /**
   * Remueve productos del carrito de compras
   */
  removeCartProduct(product, i) {
    this.products[i].cant_vendida = 0;
    this.removeProduct();
    this.estadoBotonGuardar();
  }

  /**
   * Cambia el estado del boton guardar
   */
  estadoBotonGuardar() {
    if (this.products.length == 0) {
      this.btnGuardar = false;
    } else {
      this.btnGuardar = true;
    }
  }




  /**
 * Returns form Cliente
 */
  get formEP() {
    return this.formEditarPrecio.controls;
  }

  f(campo: any) {
    return this.formContado.get(campo);
  }

  g(campo: any) {
    return this.formCredito.get(campo);
  }

  updatePago(event: any) {
    if (this.selectorPago == "contado") {
      this.f(this.pago_Contado).setValue(this.f(this.cantidadRecibida_Contado).value);
      this.f(this.cambio_Contado).setValue((this.f(this.cantidadRecibida_Contado).value - this.precioTotalVenta).toFixed(2));
    } else {
      const deuda = Number((this.g(this.cantidadRecibida_Credito).value - this.precioTotalVenta).toFixed(2))
      this.g(this.pago_Credito).setValue(this.g(this.cantidadRecibida_Credito).value);
      this.g(this.cambio_Credito).setValue(Math.abs(deuda));
    }

  }

  guardarVenta() {
    if (this.formContado.valid || this.formCredito.valid) {

      const tempMonturas = this.products.filter(monturas => monturas.tipo == 'montura');
      const tempLunas = this.products.filter(lunas => lunas.tipo == 'luna');
      const tempAccesorios = this.products.filter(accesorios => accesorios.tipo == 'accesorio');
      this.venta.list_monturas = tempMonturas;
      this.venta.list_lunas = tempLunas;
      this.venta.list_accesorios = tempAccesorios;
      this.venta.fecha_creacion_venta = new Date(Date.now());
      if (this.selectorPago == "contado") {
        this.tipoPago.observaciones = this.f(this.observaciones_Contado).value;
        this.tipoPago.cantidad_recibida = Number(this.f(this.cantidadRecibida_Contado).value);
        if (this.f(this.cantidadRecibida_Contado).value - this.precioTotalVenta < 0) {
          Sweetalert("error", "El pago no puede ser menor al valor de la compra, se sugiere compra al crédito");
          return
        } else {
          this.tipoPago.deuda = 0;
          this.tipoPago.metodo_pago = this.f(this.metodoPagoContado).value;
          this.tipoPago.cuotas = String(0);
          this.venta.id_cliente = this.f(this.usuario_Contado).value;
        }
      } else {
        if (this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value < 0) {
          Sweetalert("error", "El pago no puede ser mayor al valor de la compra, se sugiere compra al contado");
          return
        } else {
          this.tipoPago.observaciones = this.g(this.observaciones_Credito).value;
          this.tipoPago.cantidad_recibida = Number(this.g(this.cantidadRecibida_Credito).value);
          this.tipoPago.deuda = round(this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value, 1);
          this.tipoPago.metodo_pago = this.g(this.metodoPagoCredito).value;
          this.tipoPago.cuotas = String(this.tickValue);
          this.venta.id_cliente = this.g(this.usuario_Credito).value;
        }

      }
      this.venta.id_vendedor = this.usuarioService.getUser().id_usuario;
      this.venta.nombre_vendedor = this.usuarioService.getUser().nombres + ' ' + this.usuarioService.getUser().apellidos;
      this.tipoPago.forma_pago = this.selectorPago;
      this.tipoPago.precio_total = this.precioTotalVenta;
      this.tipoPago.fecha_pago = new Date();
      this.venta.tipo_venta.push(this.tipoPago);
      this.venta.id_sede = this.usuarioService.getSedebyUser();
      this.venta.habilitado = true;

      this.cancel();

    } else {

    }
  }

  cancel() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-danger ms-2',
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Está seguro de realizar la venta?',
        text: '¡No se podrá revertir esto!',
        icon: 'warning',
        cancelButtonText: 'No, cancelar!',
        confirmButtonText: 'Si, vender!',
        showCancelButton: true,
      })
      .then(result => {
        if (result.value) {
          Sweetalert("loading", "Cargando...");
          this.productosService.createVenta(this.venta).subscribe(res => {
            this.createPDF(this.venta, this.customer);
            Sweetalert("close", null);
            Sweetalert("success", "Venta realizada");
            this.modalService.dismissAll();
            this.products = [];
            this.getListMonturas();
            this.estadoBotonGuardar();
          },
            (error) => {
              Sweetalert("close", null);
              if (error.status !== 404) {

                Sweetalert("error", "Error en la conexión");
              }
            });
        } else if (

          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          this.venta.tipo_venta = [];
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'La venta no se ha realizado',
            'error'
          );

        }
      });
  }

  async createPDF(venta: VentasModel, cliente: any) {

    var fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
      },
    };

    var estadoBoleta = "Pagado"
    var fecha_hoy = new Date(Date.now()).toLocaleDateString('en-GB');
    var fecha_entrega = new Date(Date.now()).toLocaleDateString("es-CL", {
      weekday: "long", // narrow, short
      year: "numeric", // 2-digit
      month: "long", // numeric, 2-digit, narrow, long
      day: "numeric" // 2-digit
    });
    var hora_entrega = new Date(Date.now()).toLocaleTimeString("es-CL", {
      timeZone: "America/Bogota",
      hour12: true, // false
      hour: "numeric", // 2-digit
      minute: "2-digit", // numeric
      second: "2-digit" // numeric
    });
    var simboloNuevoSol = 'S/ ';
    var numeroBoleta = '#MN0131';

    var direccionEmpresa = 'Calle Santa Marta 218, Arequipa';
    var correoEmpresa = 'raulcg1234@hotmail.com ';
    var felefonoEmpresa = '955 739 464';

    var nombresCliente = cliente.nombres + ' ' + cliente.apellidos;
    var fnacimientoCliente = new Date(cliente.fecha_nacimiento).toLocaleDateString('en-GB');
    //var direccionCliente = 'Calle';
    var correoCliente = cliente.email;
    var telefonoCliente = cliente.telefono;

    var externalDataRetrievedFromServer = [];
    var peruIGV = 0.18;

    function buildData() {
      var numOrdenItems = 1;
      var totalMonturas, totallunas, totalAccesorios = 0;
      var subTotal = 0;

      // Monturas
      if (venta.list_monturas.length > 0) {
        for (var i = 0; i < venta.list_monturas.length; i++) {
          numOrdenItems += 1;
          totalMonturas = venta.list_monturas[i].precio_montura_v * venta.list_monturas[i].cant_vendida;
          subTotal += totalMonturas;
          externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_monturas[i].marca, precio: venta.list_monturas[i].precio_montura_v, cantidad: venta.list_monturas[i].cant_vendida, total: totalMonturas },) // Añade
        }
      }

      // Lunas
      if (venta.list_lunas.length > 0) {
        for (var i = 0; i < venta.list_lunas.length; i++) {
          numOrdenItems += 1;
          totallunas = venta.list_lunas[i].precio_luna_v * venta.list_lunas[i].cant_vendida;
          subTotal += totallunas;
          externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_lunas[i].material, precio: venta.list_lunas[i].precio_luna_v, cantidad: venta.list_lunas[i].cant_vendida, total: totallunas },) // Añade
        }
      }

      // Accesorios
      if (venta.list_accesorios.length > 0) {
        for (var i = 0; i < venta.list_accesorios.length; i++) {
          numOrdenItems += 1;
          totalAccesorios = venta.list_accesorios[i].precio_accesorio_v * venta.list_accesorios[i].cant_vendida;
          subTotal += totalAccesorios;
          externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_accesorios[i].nombre_accesorio, precio: venta.list_accesorios[i].precio_accesorio_v, cantidad: venta.list_accesorios[i].cant_vendida, total: totalAccesorios },) // Añade
        }
      }
      return subTotal;
    }

    function buildTableBody(data, columns, subtotal) {
      var body = [];

      body.push([{ text: 'No.', style: 'tableHeader', alignment: 'center' }, { text: 'Detalle', style: 'tableHeader', alignment: 'center' }, { text: 'Precio', style: 'tableHeader', alignment: 'center' }, { text: 'Cantidad', style: 'tableHeader', alignment: 'center' }, { text: 'Total', style: 'tableHeader', alignment: 'center' }]);

      data.forEach(function (row) {
        var dataRow = [];

        columns.forEach(function (column) {
          //dataRow.push({ text: row[column].toString(), style: 'cell', alignment: 'center' },);
          dataRow.push(row[column].toString());
        })

        body.push(dataRow);
      });

      /* var totalIGV = round(subtotal * peruIGV, 2);
      var total = round(subtotal + totalIGV, 1); */

      var total = round(subtotal, 1);

      /* body.push([{ text: ' ', rowSpan: 3, colSpan: 2}, { }, {text: 'Sub. Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, { }, { text: simboloNuevoSol + subtotal, style: 'contenido', alignment: 'right' }]);
      body.push([{ }, { }, { text: 'IGV (18%) :', style: 'tableHeader', alignment: 'right', colSpan: 2}, { }, { text: simboloNuevoSol + totalIGV, style: 'contenido', alignment: 'right' }]); */
      body.push([{ text: '', border: [false, false, false, false], colSpan: 2 }, {}, { text: 'Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + total, style: 'contenido', alignment: 'right' }]);

      return body;
    }

    function table(data, columns) {
      var subtotal = buildData();
      return {
        style: 'tableMargin',
        color: '#444',
        table: {
          widths: [25, '*', 63, 60, 63],
          heights: [20, 20, 20, 20],
          headerRows: 1,
          body: buildTableBody(data, columns, subtotal)
        }
      };
    }

    function estadoBoletaFunc(estado) {
      return {
        text: estado, background: 'yellow'
      };
    }


    const pdfDefinition: any = {
      pageSize: 'A4',
      //pageOrientation: 'landscape',
      pageMargins: [40, 60, 40, 60],
      content: [
        {
          style: 'tableMargin',
          table: {
            widths: ['*', '*'],
            body: [
              /* [{ image: await getBase64ImageFromURL('/assets/images/logo-dark.png'), width: 150 }, { text: 'Nº de Boleta: ' + numeroBoleta, style: 'tableHeader', rowSpan: 4, alignment: 'right' }], */
              [{ image: await getBase64ImageFromURL('/assets/images/logo-dark.png'), width: 150 }, { text: '', style: 'tableHeader', rowSpan: 3, alignment: 'right' }],
              [{ text: direccionEmpresa, style: 'datosempresa' }, {}],
              [{ text: correoEmpresa, style: 'datosempresa' }, {}],
              [{ text: felefonoEmpresa, style: 'datosempresa' }, {}],
            ]
          },
          layout: 'noBorders'
        },

        {
          style: 'tableMargin',
          table: {
            widths: ['*', '*'],
            body: [
              /* [{ text: 'Facturado a:', style: 'tableHeader' }, { text: 'Nº de Boleta:', style: 'tableHeader', alignment: 'right' }],
              [{ text: nombresCliente, style: 'subtitulo' }, {text: numeroBoleta, style: 'contenido', alignment: 'right'}], */
              [{ text: 'Facturado a:', style: 'tableHeader' }, { text: 'Fecha de la Boleta:', style: 'tableHeader', alignment: 'right' }],
              [{ text: nombresCliente, style: 'subtitulo' }, { text: fecha_hoy, style: 'contenido', alignment: 'right' }],
              [{ text: 'Fecha de Nacimiento: ' + fnacimientoCliente, style: 'contenido' }, { text: '', style: 'tableHeader', alignment: 'right' }],
              [{ text: 'Correo: ' + correoCliente, style: 'contenido' }, { text: '', style: 'contenido', alignment: 'right' }],
              [{ text: 'Telefono: ' + telefonoCliente, style: 'contenido' }, {}],
            ]
          },
          layout: 'noBorders'
        },

        { text: 'Resumen del pedido:', style: 'subtitulo' },

        table(externalDataRetrievedFromServer, ['num_orden', 'detalle', 'precio', 'cantidad', 'total']),

        {
          text: [,
            { text: 'Fecha de Entrega: ', style: 'textBold' },
            fecha_entrega,
            '   ',
            { text: 'Hora: ', style: 'textBold' },
            hora_entrega,
          ]
        },

        { text: 'Nota:', style: 'subtitulo2' },
        { text: 'Todo trabajo se efectuara con un adelanto del 50%.', style: 'contenido2', alignment: 'justify' },
        { text: 'La empresa no se responsabiliza de los pedidos no recogidos después de un mes.', style: 'contenido2', alignment: 'justify' },
      ],
      styles: {
        subtitulo: {
          bold: true,
          fontSize: 13,
          color: 'black',
          margin: [0, 10, 0, 5]
        },
        subtitulo2: {
          bold: true,
          fontSize: 10,
          color: 'black',
          margin: [0, 10, 0, 5]
        },
        contenido: {
          fontSize: 12,
        },
        contenido2: {
          fontSize: 8,
        },
        textBold: {
          fontSize: 12,
          bold: true,
        },

        datosempresa: {
          fontSize: 10,
        },

        header: {
          fontSize: 17,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 13,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        subtitle: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableMargin: {
          margin: [0, 15, 0, 15]
        },
        tableOpacityExample: {
          margin: [0, 5, 0, 15],
          fillColor: 'blue',
          fillOpacity: 0.3
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        },

      },

    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
