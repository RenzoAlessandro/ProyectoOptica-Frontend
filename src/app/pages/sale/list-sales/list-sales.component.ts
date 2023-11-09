import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TransactionService } from './sale.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { VentasModel } from 'src/models/venta';
import Spanish from 'flatpickr/dist/l10n/es.js';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { VentaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';
import { Sweetalert } from 'src/utils/sweetalert';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap'

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import saveFile from 'save-as-file';
import { getBase64ImageFromURL, getBase64ImageFromUrl2, getBase64ImageFromUrl3, round } from 'src/utils/functions';
import { ClienteService } from 'src/app/services/cliente.service';
import { CustomersModel } from 'src/models/customer';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TipoVentaModel } from 'src/models/tipo_venta';
import { SedesModel } from 'src/models/sedes';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss'],
  providers: [TransactionService, DecimalPipe]
})

export class ListSalesComponent implements OnInit {

  role = 'Admin'
  formSedes: FormGroup;
  listSedes: Array<SedesModel>;
  nombre_sedes: string = "campoSede";
  idSede: string = "";

  mostrarSpinner = false;

  formCreditoActualizacion: FormGroup;
  submitted_CreditoActualizacion = false;
  cantidadRecibida_CreditoActualizacion: string = "campoCantidadRecibidaCreditoActualizacion";
  fechaVenta_CreditoActualizacion: string = "campoFechaVentaCreditoActualizacion";
  usuario_CreditoActualizacion: string = "campoUsuarioCreditoActualizacion";
  nombreCreditoActualizacion: string = "campoNombreCreditoActualizacion";
  precioTotal_CreditoActualizacion: string = "campoPrecioTotalCreditoActualizacion";
  pago_CreditoActualizacion: string = "campoPagoCreditoActualizacion";
  cambio_CreditoActualizacion: string = "campoCambioCreditoActualizacion";
  observaciones_CreditoActualizacion: string = "campoObservacionesCreditoActualizacion";
  metodoPagoCreditoActualizacion: string = "campoMetodoPagoCreditoActualizacion";

  numberPattern = '[0-9]+';
  fechaVenta: Date;
  precioTotalVenta: number;

  activePago = 1;
  listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];

  // rango de fecha
  exampleOptions: FlatpickrOptions = {
    altInputClass: 'form-control',
    locale: Spanish.es,
  };

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;

  transactions$: Observable<VentasModel[]>;
  total$: Observable<number>;

  formDateRange: FormGroup;
  fechaDesde: string = 'campoFechaDesde';
  fechaHasta: string = 'campoFechaHasta';

  usuario: any;
  venta = new VentasModel;
  tipoPago: Array<TipoVentaModel> = [];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  decimalPattern = /^\d+(\.\d{1,2})?$/;
  excelVentas: Array<VentasModel> = [];

  sedeActual = new SedesModel;
  constructor(
    public service: TransactionService,
    private fb: FormBuilder,
    private ventasService: VentaService,
    private modalService: NgbModal,
    private customerService: ClienteService,
    private usuarioService: UsuarioService,
    private ventaService: VentaService,
  ) {
    this.transactions$ = service.transactions$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res => {
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Lista de Ventas', active: true }];
    this.getListSedes();
    this.crearFormulario();
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
    this.sedeActual = this.getSedeActual(this.idSede,this.listSedes);
  }

  getSedeActual (idSede:string, sedes:any): SedesModel {
    let sedeActual = sedes.find(sede => sede.id_sede === idSede);
    return sedeActual;
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
   * @param centerDataModalActualizar center modal data
   */
  centerModalActualizar(centerDataModalActualizar: any, venta: VentasModel) {
    this.crearFormularioActualizar();
    this.fechaVenta = new Date(Date.now());
    /* venta.tipo_venta = venta.tipo_venta.sort((a,b)=> {
      return  new Date(a.fecha_pago).getTime() - new Date(b.fecha_pago).getTime()
    }); */
    const user = {
      nombre: venta.nombre_cliente,
      deuda: venta.tipo_venta[0].deuda,
      listDeudas: venta.tipo_venta
    }
    this.usuario = user;
    this.venta.id_ventas = venta.id_ventas;
    this.venta.id_cliente = venta.id_cliente;
    this.tipoPago = venta.tipo_venta;
    this.g(this.precioTotal_CreditoActualizacion).setValue((this.usuario.deuda).toFixed(2))
    this.modalService.open(centerDataModalActualizar, { centered: true, windowClass: 'modal-holder' });
    this.g(this.fechaVenta_CreditoActualizacion).setValue(this.fechaVenta.toLocaleDateString());
  }
  /**
   * Close event modal
   */
  closeEventModal() {
    /* this.formCreditoActualizacion = this.fb.group({
      title: '',
      category: '',
    }); */
    this.modalService.dismissAll();
  }
  /**
   * Save the event
   */
  saveEvent() {
    if (this.formCreditoActualizacion.valid) {

    }
    this.submitted_CreditoActualizacion = true;
  }

  crearFormulario() {
    this.formDateRange = this.fb.group({
      [this.fechaDesde]: [null, [Validators.required]],
      [this.fechaHasta]: []
    });

    this.formSedes = this.fb.group({
      [this.nombre_sedes]: [this.idSede]
    })
  }

  crearFormularioActualizar() {
    this.formCreditoActualizacion = this.fb.group({
      [this.cantidadRecibida_CreditoActualizacion]: [null, [
        Validators.required,
        Validators.pattern(this.decimalPattern),
      ]],
      [this.fechaVenta_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.usuario_CreditoActualizacion]: [null],
      [this.precioTotal_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.pago_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.cambio_CreditoActualizacion]: [{ value: null, disabled: true }],
      [this.observaciones_CreditoActualizacion]: [null],
      [this.metodoPagoCreditoActualizacion]: [null, [
        Validators.required
      ]],

    })
  }


  g(campo: any) {
    return this.formCreditoActualizacion.get(campo);
  }

  updatePago(event: any) {
    this.g(this.pago_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value);
    const deuda = Number(round(this.g(this.cantidadRecibida_CreditoActualizacion).value - this.usuario.deuda, 1).toFixed(2));
    this.g(this.cambio_CreditoActualizacion).setValue(Math.abs(deuda));
  }

  guardarActualizacionDeuda() {
    if (this.formCreditoActualizacion.valid) {
      this.venta.id_vendedor = this.usuarioService.getUser().id_usuario;
      this.venta.nombre_vendedor = this.usuarioService.getUser().nombres + ' ' + this.usuarioService.getUser().apellidos;
      this.venta.id_sede = this.usuarioService.getSedebyUser();
      let deuda = 0;
      deuda = round(this.tipoPago[0].deuda - this.g(this.cantidadRecibida_CreditoActualizacion).value, 1);
      const pago: TipoVentaModel = {
        forma_pago: "credito",
        cantidad_recibida: Number(this.g(this.cantidadRecibida_CreditoActualizacion).value),
        deuda: deuda,
        cuotas: this.tipoPago[0].cuotas,
        precio_total: this.tipoPago[0].precio_total,
        metodo_pago: this.g(this.metodoPagoCreditoActualizacion).value,
        fecha_pago: new Date(Date.now()),
        observaciones: this.g(this.observaciones_CreditoActualizacion).value
      }
      let listPago: Array<TipoVentaModel> = [];

      if (this.tipoPago.length + 1 == Number(this.tipoPago[0].cuotas) && deuda > 0) {
        Sweetalert("error", "Es su última cuota, tiene que cancelar la totalidad");
        return
      }
      //controla que la cantidad recibida sea menor a la deuda
      if (Number(this.g(this.cantidadRecibida_CreditoActualizacion).value > this.g(this.precioTotal_CreditoActualizacion).value)) {
        Sweetalert("error", "El pago debe ser menor a la deuda");
        return
      }

      if (deuda <= 0) {
        pago.deuda = 0;
        listPago.push(pago);
        listPago.push(...this.tipoPago)
        this.venta.tipo_venta = listPago;
        Swal.fire({
          title: '¿Está seguro que desea cancelar la totalidad de la deuda?',
          text: 'No se podrá revertir esto!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#34c38f',
          cancelButtonColor: '#f46a6a',
          confirmButtonText: 'Si, cancelar deuda!'
        }).then(result => {
          if (result.value) {
            Sweetalert("loading", "Cargando...");
            this.ventasService.updatePagoCuotas(this.venta.id_ventas, this.venta).subscribe(res => {
              Sweetalert("close", null);
              Sweetalert("success", "Venta completada");
              this.modalService.dismissAll();
              this.updateListVentas();
            }, error => {
              Sweetalert("close", null);
              Sweetalert("error", "Error en la conexión");
            },
            );
          }
          else if (

            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire(
              'Cancelado',
              'Venta no eliminada',
              'error'
            );
          }
        }
        );
      } else {
        listPago.push(pago);
        listPago.push(...this.tipoPago)
        this.venta.tipo_venta = listPago;
        this.ventasService.updatePagoCuotas(this.venta.id_ventas, this.venta).subscribe(res => {
          this.modalService.dismissAll();
          this.updateListVentas();
        })
      }
    } else {
      return;
    }
  }

  f(campo: any) {
    return this.formDateRange.get(campo);
  }

  filterDateRange() {
    if (this.formDateRange.valid) {
      this.idSede = this.fS(this.nombre_sedes).value;
      let fechaIni = new Date(this.f(this.fechaDesde).value + 'T00:00');
      let fechaFin: Date;
      if (this.f(this.fechaHasta).value != null) {
        fechaFin = new Date(this.f(this.fechaHasta).value + 'T23:59');
      } else {
        fechaFin = new Date(Date.now());
        fechaFin.setHours(23, 59, 0)
      }
      //fechaIni.setDate(fechaIni.getDate() - 1)
      /* fechaFin.setDate(fechaFin.getDate() + 1)
      fechaIni.setHours(0,0,0);
      fechaFin.setHours(23,59,0) */
      this.ventasService.getVentasByDate(fechaIni, fechaFin, this.idSede).subscribe(res => {
        this.service.updateTable(res);
      })
    } else {
      return;
    }
  }

  eliminar(data: VentasModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la venta?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.ventasService.darBajaVenta(data.id_ventas).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Venta eliminada");
          this.updateListVentas();
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
          'Venta no eliminada',
          'error'
        );
      }
    }
    );
  }

  updateListVentas() {
    this.ventasService.getVentasbySede(this.idSede).subscribe(res => {
      this.service.updateTable(res);
    })
  }

  createPDF(venta: VentasModel) {
    this.customerService.getAllClientbyId(venta.id_cliente).subscribe((res: CustomersModel) => {
      this.generatePDF(venta, res[0]);
    })
  }



  async generatePDF(venta: VentasModel, cliente: CustomersModel) {
    var fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
      },
    };

    var estadoBoleta = "Pagado"
    var fecha_hoy = new Date(venta.fecha_creacion_venta).toLocaleDateString('en-GB');
    //var fecha_hoy = new Date (Date.now()).toLocaleDateString('en-GB');
    var fecha_entrega = new Date(venta.fecha_creacion_venta).toLocaleDateString("es-CL", {
      weekday: "long", // narrow, short
      year: "numeric", // 2-digit
      month: "long", // numeric, 2-digit, narrow, long
      day: "numeric" // 2-digit
    });
    var hora_entrega = new Date(venta.fecha_creacion_venta).toLocaleTimeString("es-CL", {
      timeZone: "America/Bogota",
      hour12: true, // false
      hour: "numeric", // 2-digit
      minute: "2-digit", // numeric
      second: "2-digit" // numeric
    });


    var simboloNuevoSol = 'S/. ';
    //var numeroBoleta = '0000418';
    var propietarioEmpresa = 'Raúl J. Condori Ramos'
    // var sedeEmpresa = venta.id_sede;
    var direccionEmpresa = this.sedeActual.direccion;
    var felefonoEmpresa = this.sedeActual.telefono;
    var rucEmpresa = this.sedeActual.ruc;
    var primeraNota = 'Todo trabajo se efectuara con un adelanto del 50%.';
    var segundaNota = 'La empresa no se responsabiliza de los pedidos no recogidos después de un mes.';


    var nombresCliente = cliente.nombres;
    var apellidosCliente = cliente.apellidos;
    var dniCliente = cliente.dni ? cliente.dni : "Sin especificar.";;
    // var fnacimientoCliente = cliente.fecha_nacimiento ? new Date(cliente.fecha_nacimiento).toLocaleDateString('en-GB') : "Sin especificar.";
    var direccionCliente = cliente.direccion ? cliente.direccion : "Sin especificar.";
    // var telefonoCliente = cliente.telefono ? cliente.telefono : "Sin especificar.";

    var od_esf_Cliente = cliente.medidas[0].od_esferico > 0? '+'+cliente.medidas[0].od_esferico.toFixed(2): cliente.medidas[0].od_esferico.toFixed(2) ;
    var od_cil_Cliente = cliente.medidas[0].od_cilindrico > 0 ? '+'+cliente.medidas[0].od_cilindrico.toFixed(2) : cliente.medidas[0].od_cilindrico.toFixed(2);
    var od_eje_Cliente = cliente.medidas[0].od_eje;

    var oi_esf_Cliente = cliente.medidas[0].oi_esferico > 0? '+'+cliente.medidas[0].oi_esferico.toFixed(2): cliente.medidas[0].oi_esferico.toFixed(2) ;
    var oi_cil_Cliente = cliente.medidas[0].oi_cilindrico > 0 ? '+'+cliente.medidas[0].oi_cilindrico.toFixed(2) : cliente.medidas[0].oi_cilindrico.toFixed(2);
    var oi_eje_Cliente = cliente.medidas[0].oi_eje;

    var dip_Cliente = cliente.medidas[0].dip;
    var add_Cliente = cliente.medidas[0].add > 0 ? '+'+cliente.medidas[0].add.toFixed(2): cliente.medidas[0].add.toFixed(2)

    var externalDataRetrievedFromServer = [];
    // var peruIGV = 0.18;

    function buildData() {
      var numOrdenItems = 0;
      var totalMonturas, totallunas, totalAccesorios = 0;
      var subTotal = 0;

      // Monturas
      if (venta.list_monturas.length > 0) {
        for (var i = 0; i < venta.list_monturas.length; i++) {
          numOrdenItems += 1;
          totalMonturas = venta.list_monturas[i].precio_montura_v * venta.list_monturas[i].cant_vendida;
          subTotal += totalMonturas;
          externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_monturas[i].marca +' Cód. int.: '+ venta.list_monturas[i].codigo + ' Color: ' + venta.list_monturas[i].color, precio: venta.list_monturas[i].precio_montura_v, cantidad: venta.list_monturas[i].cant_vendida, total: totalMonturas },) // Añade
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

      body.push([{ text: 'No.', style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3]}, { text: 'Detalle',  style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3]}, { text: 'P. Unit.',  style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3]}, { text: 'Cant.',  style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3] }, { text: 'Importe',  style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3] }]);

      data.forEach(function (row) {
        var dataRow = [];

        columns.forEach(function (column) {
          if (column === 'num_orden') {
            dataRow.push({ text: row[column].toString(), style: 'text', alignment: 'center', margin: [0, 2, 0, 2] },);
          } else if (column === 'detalle'){
            dataRow.push({ text: row[column].toString(), style: 'text', alignment: 'left', margin: [0, 2, 0, 2] },);
          } else {
            dataRow.push({ text: row[column].toString(), style: 'text', alignment: 'right', margin: [0, 2, 0, 2] },);
          }
        })

        body.push(dataRow);
      });

      /* var totalIGV = round(subtotal * peruIGV, 2);
      var total = round(subtotal + totalIGV, 1);  */

      var total = round(subtotal, 1);

      /* body.push([{ text: ' ', rowSpan: 3, colSpan: 2}, { }, {text: 'Sub. Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, { }, { text: simboloNuevoSol + subtotal, style: 'contenido', alignment: 'right' }]);
      body.push([{ }, { }, { text: 'IGV (18%) :', style: 'tableHeader', alignment: 'right', colSpan: 2}, { }, { text: simboloNuevoSol + totalIGV, style: 'contenido', alignment: 'right' }]); */
      /* body.push([{ text: '', borderColor: ['#FFFFFF', , , '#FFFFFF'], colSpan: 3 }, {  }, {  }, { text: 'Total:', style: 'tableHeader', alignment: 'right' }, { text: simboloNuevoSol + total, style: 'contenido', alignment: 'right' }]); */
      body.push([{ text: '', border: [false, false, false, false], colSpan: 2 }, {}, { text: 'Total:', style: 'title', alignment: 'right', colSpan: 2, margin: [0, 2, 0, 2] }, {}, { text: simboloNuevoSol + total, style: 'title', alignment: 'right', margin: [0, 2, 0, 2] }]);

      return body;
    }

    function table(data, columns) {
      var subtotal = buildData();
      return {
        style: 'tableBasic',
        color: '#444',
        table: {
          widths: [25, '*', 45, 35, 55],
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
       /* images: {
        MyImage: {
          url: this.sedeActual.logoURL,
        }
      }, */
      pageSize: 'A4',
      //pageOrientation: 'landscape',
      pageMargins: [ 40, 10, 40, 10 ], // left, top, right, botton
      content: [

        // LOGO y DATOS DE LA EMPRESA
        {
          style: 'tableBasic',
          table: {
            widths: [340, '*'],
            body: [
              [
                [
                  {
                    table: {
                      widths: ['*'],
                      body: [
                         [{ image: await getBase64ImageFromURL("https://media.geeksforgeeks.org/wp-content/uploads/20220726175411/GFG.png"), width: 230}],
                        //[{ image: 'MyImage', width: 230}],
                        [{ text: 'De ' + propietarioEmpresa, alignment: 'center' }],
                      ]
                    },
                    layout: {
                      defaultBorder: false,
                    }
                  },
                ],             
                [
                  {
                    table: {
                      widths: ['*'],
                      body: [
                        [{ text: 'R.U.C. ' + rucEmpresa, style: 'title',alignment: 'center', margin: [0, 6, 0, 6] }],
                        [{ text: 'BOLETA DE VENTA' , style: 'title2', alignment: 'center' , fillColor: '#2D4497', fillOpacity: 0.80, margin: [0, 6, 0, 6] }],
                        //[{ text: '001- Nº ' + numeroBoleta, style: 'title', color: 'red', alignment: 'center', margin: [0, 6, 0, 6] }],
                      ]
                    },
                  },
                ],
              ]
            ]
          },
          layout: {
            defaultBorder: false,
          }
        },

        {
          style: 'tableBasic',
          table: {
            widths: ['*', '*'],
            body: [
              [{ text: direccionEmpresa, style: 'header', fillColor: '#2D4497', fillOpacity: 0.80}, { text: 'Cel: ' + felefonoEmpresa,  style: 'header', fillColor: '#2D4497', fillOpacity: 0.80 }],
            ]
          },
          layout: {
            defaultBorder: false,
          }
        },


        // DATOS DEL CLIENTE
        {
          style: 'tableBasic',
          table: {
            widths: ['*', '*'],
            body: [
              [{ text: 'Señor(a): ' + nombresCliente + apellidosCliente, style: 'title', alignment: 'left', Span: 1 }, { }],
              [{ text: 'Dirección: ' + direccionCliente, style: 'text', alignment: 'left'}, { text: 'DNI: ' + dniCliente, style: 'text', alignment: 'left'}],
            ]
          },
          layout: {
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 1 : 0;
            },
          }
        },

        // RESUMEN DEL PEDIDO
        {
          style: 'tableBasic',
          table: {
            widths: [150],
            heights: [15],
            body: [
              [{ text: 'RESUMEN DEL PEDIDO: ', style: 'title2', alignment: 'left' , fillColor: '#2D4497', fillOpacity: 0.80 } ],
            ]
          },
          layout: {
            defaultBorder: false,
            paddingLeft: function(i, node) { return 10; },
          }
        },


        table(externalDataRetrievedFromServer, ['num_orden', 'detalle', 'precio', 'cantidad', 'total']),

        // DETALLE DE LA MEDIDA
        {
          style: 'tableBasic',
          table: {
            widths: [150],
            heights: [15],
            body: [
              [{ text: 'DETALLE DE LA MEDIDA: ', style: 'title2', alignment: 'left' , fillColor: '#2D4497', fillOpacity: 0.80 } ],
            ]
          },
          layout: {
            defaultBorder: false,
            paddingLeft: function(i, node) { return 10; },
          }
        },

        {
          style: 'tableBasic',
          table: {
            widths: ['*', '*', '*', '*', '*', '*'],
            heights: [15, 15, 15],
            headerRows: 2,
            body: [
              [{ text: 'REF.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'ESF.'        , style: 'title', alignment: 'center', margin: [0, 2, 0, 2]}, { text: 'CIL.'        , style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'EJE.'        , style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'AV.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'DIP.'     , style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }],
              [{ text: 'O.D.', style: 'title', alignment: 'center', margin: [0, 1, 0, 1] }, { text: od_esf_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1]}, { text: od_cil_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }, { text: od_eje_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }, { text: ''   , style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }, { text: dip_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }],
              [{ text: 'O.I.', style: 'title', alignment: 'center', margin: [0, 1, 0, 1] }, { text: oi_esf_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1]}, { text: oi_cil_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }, { text: oi_eje_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }, { text: ''   , style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }, { text: dip_Cliente, style: 'text' , alignment: 'center', margin: [0, 1, 0, 1] }],
            ]
          },
          layout: {
            fillColor: function (rowIndex) {
              return (rowIndex === 0) ? '#d8e3fc' : null;
            }
          }
        },

        // VISION DE CERCA 
        {
          style: 'tableBasic',
          table: {
            widths: [150, '*', 150],
            heights: [15],
            body: [
              [
                { text: 'VISIÓN DE CERCA: ', alignment: 'left', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80},
                [
                  {
                    table: {
                      widths: ['auto', '*'],
                      body: [
                        [ 
                          { text: 'ADD.', style: 'title', alignment: 'center', fillColor: '#d8e3fc'},
                          { text: add_Cliente, style: 'text', alignment: 'center' }
                        ],
                      ]
                    },
                  },
                ],
                { }
              ]
            ]
          },
          layout: {
            defaultBorder: false,
            paddingLeft: function(i, node) { return 10; },
          }
        },



        // FECHA DE ENTREGA
        {
          style: 'tableBasic',
          table: {
            widths: [140, '*', 50, 'auto'],
            body: [
              [{ text: 'FECHA DE ENTREGA: ', style: 'title2', alignment: 'left', fillColor: '#2D4497', fillOpacity: 0.80 }, {text: fecha_entrega, style: 'text', alignment: 'left', margin: [0, 1, 0, 1] }, { text: 'HORA: ', style: 'title2', alignment: 'left', fillColor: '#2D4497', fillOpacity: 0.80 }, {text: hora_entrega, style: 'text', alignment: 'left', margin: [0, 1, 0, 1] } ],
            ]
          },
          layout: {
            defaultBorder: false,
            paddingLeft: function(i, node) { return 10; },
          }
        },

        // NOTAS
        {
          style: 'tableBasic',
          table: {
            widths: [350, '*'],
            body: [
              [{ text: 'NOTA: ', color: '#2D4497', style: 'subtitle', alignment: 'left' }, { } ],
              [{ text: primeraNota, color: '#2D4497', style: 'small', alignment: 'left' }, { }],
              [{ text: segundaNota, color: '#2D4497', style: 'small', alignment: 'left' }, { }],
            ]
          },
          layout: {
            defaultBorder: false,
          }
        },

      ],
      styles: {

        header: {
          fontSize: 15,
          bold: true,
          color: 'white',
          alignment: 'center',
          margin: [0, 0, 0, 0],
        },

        title: {
          fontSize: 13,
          bold: true,
          color: '#2D4497',
          margin: [0, 0, 0, 0],
        },

        title2: {
          fontSize: 13,
          bold: true,
          color: 'white',
          margin: [0, 0, 0, 0],
        },

        subtitle: {
          fontSize: 12,
          bold: true,
          color: '#2D4497',
          margin: [0, 0, 0, 0],
        },

        text: {
          fontSize: 11,
          color: '#2D4497',
          margin: [0, 0, 0, 0],
        },

        small: {
          fontSize: 9,
          color: '#2D4497',
          margin: [0, 0, 0, 0],
        },

        tableBasic: {
          color: '#2D4497',
          margin: [0, 5, 0, 5],
        },

      },

    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  fS(campo: string) {
    return this.formSedes.get(campo);
  }

  changeSedes() {
    this.idSede = this.fS(this.nombre_sedes).value;
    this.getListVentas(this.idSede);
  }

  getListVentas(sede: string) {
    this.ventasService.getVentasbySede(sede).subscribe(res => {
      this.service.updateTable(res)
    })
  }

  exportarVentas() {
    if (this.formSedes.valid && this.formDateRange.valid) {
      let data = [];
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      this.idSede = this.fS(this.nombre_sedes).value;
      let fechaIni = new Date(this.f(this.fechaDesde).value + 'T00:00');
      let fechaFin: Date;
      if (this.f(this.fechaHasta).value != null) {
        fechaFin = new Date(this.f(this.fechaHasta).value + 'T23:59');
      } else {
        fechaFin = new Date(Date.now());
        fechaFin.setHours(23, 59, 0)
      }
      let monturas ={};
      let lunas ={};
      let accesorios ={};

      

      this.ventaService.getVentasByDate(fechaIni, fechaFin, this.idSede).subscribe(res => {
        this.excelVentas = res;

        console.log(this.excelVentas);
        
        data = this.excelVentas.map((ventas: VentasModel) => {

          let monturasTemp = {};
          let lunasTemp = {};
          let accesoriosTemp = {};

          for(var ind = 0; ind < ventas.list_monturas.length; ind++){
            monturasTemp[`MONT ${(ind+1)} CODIGO`] = ventas.list_monturas[ind].codigo
            monturasTemp[`MONT ${(ind+1)} P VENTA`] = ventas.list_monturas[ind].precio_montura_v
            monturasTemp[`MONT ${(ind+1)} P COMPRA`] = ventas.list_monturas[ind].precio_montura_c
            monturasTemp[`MONT ${(ind+1)} CANT VENDIDA`] = ventas.list_monturas[ind].cant_vendida
            monturasTemp[`MONT ${(ind+1)} MARCA`] = ventas.list_monturas[ind].marca
            monturasTemp[`MONT ${(ind+1)} MATERIAL`] = ventas.list_monturas[ind].material
            monturasTemp[`MONT ${(ind+1)} COLOR`] = ventas.list_monturas[ind].color
          }
          monturas = {...monturasTemp};
          for(var ind = 0; ind < ventas.list_lunas.length; ind++){
            lunasTemp[`LUN ${(ind+1)} P VENTA`] = ventas.list_lunas[ind].precio_luna_v
            lunasTemp[`LUN ${(ind+1)} P COMPRA`] = ventas.list_lunas[ind].precio_luna_c
            lunasTemp[`LUN ${(ind+1)} CANT VENDIDA`] = ventas.list_lunas[ind].cant_vendida
            lunasTemp[`LUN ${(ind+1)} MATERIAL`] = ventas.list_lunas[ind].material
          }
          lunas = {...lunasTemp};
          for(var ind = 0; ind < ventas.list_accesorios.length; ind++){
            accesoriosTemp[`LUN ${(ind+1)} P VENTA`] = ventas.list_accesorios[ind].precio_accesorio_v
            accesoriosTemp[`LUN ${(ind+1)} P COMPRA`] = ventas.list_accesorios[ind].precio_accesorio_c
            accesoriosTemp[`LUN ${(ind+1)} CANT VENDIDA`] = ventas.list_accesorios[ind].cant_vendida
            accesoriosTemp[`LUN ${(ind+1)} NOMBRE`] = ventas.list_accesorios[ind].nombre_accesorio
          }
          accesorios = {...accesoriosTemp};

          if (ventas.hasOwnProperty("medidas")) {
            return Object.assign({},{
              "FECHA": new Date(ventas.fecha_creacion_venta).toLocaleDateString('en-GB'),
              "NOMBRE CLIENTE": ventas.nombre_cliente,
              //"ACCESORIOS": JSON.stringify(accesorios),
              //"LUNAS": JSON.stringify(lunas),
              //"MONTURAS": JSON.stringify(monturas),
              "TOTAL": ventas.tipo_venta[0].precio_total == 0 ? "+0.00": ventas.tipo_venta[0].precio_total ,
              "ESF D": ventas.medidas[0].od_esferico == 0? "+0.00": ventas.medidas[0].od_esferico,
              "CYL D": ventas.medidas[0].od_cilindrico == 0 ? "+0.00" : ventas.medidas[0].od_cilindrico,
              "EJE D": ventas.medidas[0].od_eje == 0 ? "+0.00" : ventas.medidas[0].od_eje,
              "ESF I": ventas.medidas[0].oi_esferico == 0 ? "+0.00" : ventas.medidas[0].oi_esferico,
              "CYL I": ventas.medidas[0].oi_cilindrico == 0 ? "+0.00" : ventas.medidas[0].oi_cilindrico,
              "EJE I": ventas.medidas[0].oi_eje == 0 ? "+0.00" : ventas.medidas[0].oi_eje,
              "DIP": ventas.medidas[0].dip == 0 ? "+0.00" : ventas.medidas[0].dip,
              "ADD": ventas.medidas[0].add == 0 ? "+0.00" : ventas.medidas[0].add,
              "USUARIO": ventas.nombre_vendedor.toUpperCase(),
              "VENDEDOR": ventas.nombre_jalador ? ventas.nombre_jalador.toUpperCase() : null,
              "ENCARGADO MEDICION": ventas.encargado_medicion ? ventas.encargado_medicion.toUpperCase() : null,
              "FORMA DE PAGO": ventas.tipo_venta[0].forma_pago.toUpperCase(),
              "ESTADO": ventas.tipo_venta[0].deuda > 0 ? "DEUDA" : "PAGADO"
            },monturas,lunas,accesorios)
          } else {
            return Object.assign({},{
              "FECHA": new Date(ventas.fecha_creacion_venta).toLocaleDateString('en-GB'),
              "NOMBRE CLIENTE": ventas.nombre_cliente,
              //"ACCESORIOS": JSON.stringify(accesorios),
              //"LUNAS": JSON.stringify(lunas),
              //"MONTURAS": JSON.stringify(monturas),
              "TOTAL": ventas.tipo_venta[0].precio_total == 0 ? "+0.00": ventas.tipo_venta[0].precio_total ,
              "USUARIO": ventas.nombre_vendedor.toUpperCase(),
              "VENDEDOR": ventas.nombre_jalador ? ventas.nombre_jalador.toUpperCase() : null,
              "ENCARGADO MEDICION": ventas.encargado_medicion ? ventas.encargado_medicion.toUpperCase() : null,
              "FORMA DE PAGO": ventas.tipo_venta[0].forma_pago,
              "ESTADO": ventas.tipo_venta[0].deuda > 0 ? "DEUDA" : "PAGADO",
            },monturas,lunas,accesorios )
          }

        });

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
        saveFile(blobData, 'ventas' + '_' + nombreSede.nombre_sede);
      })

    } else {
      return;
    }
  }

  
}
