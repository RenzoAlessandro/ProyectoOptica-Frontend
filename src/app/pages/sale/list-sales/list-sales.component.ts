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

import { getBase64ImageFromURL, round } from 'src/utils/functions';
import { ClienteService } from 'src/app/services/cliente.service';
import { CustomersModel } from 'src/models/customer';


@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss'],
  providers: [TransactionService, DecimalPipe]
})

export class ListSalesComponent implements OnInit {

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

  usuario:any;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public service: TransactionService,
    private fb: FormBuilder,
    private fbActualizar: FormBuilder,
    private ventasService: VentaService,
    private modalService: NgbModal,
    private customerService: ClienteService
    ) {
    this.transactions$ = service.transactions$;
    console.log(this.transactions$)
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Lista de Ventas', active: true }];
    this.crearFormulario();
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
    console.log(venta)
    const user = {
      nombre : venta.nombre_cliente,
      deuda : venta.tipo_venta[0].deuda,
      listDeudas : venta.tipo_venta,
    }
    this.usuario = user;
    this.modalService.open(centerDataModalActualizar, { centered: true,windowClass:'modal-holder' });
    this.g(this.fechaVenta_CreditoActualizacion).setValue(this.fechaVenta.toLocaleDateString());
    this.g(this.precioTotal_CreditoActualizacion).setValue(this.precioTotalVenta);
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
      [this.fechaDesde]:[],
      [this.fechaHasta]:[]
    })
  }

  crearFormularioActualizar() {
    this.formCreditoActualizacion = this.fbActualizar.group({
      [this.cantidadRecibida_CreditoActualizacion]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern),
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
      [this.nombreCreditoActualizacion]: [null, [
        Validators.required]],
    })
  }


  g(campo: any) {
    return this.formCreditoActualizacion.get(campo);
  }

  updatePago(event: any) {
    console.log("entre")
      this.g(this.pago_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value);
      this.g(this.cambio_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value - this.precioTotalVenta);
  }

  guardarActualizacionDeuda() {
    if (this.formCreditoActualizacion.valid) {


    } else {

    }
  }
  
  f(campo:any) {
    return this.formDateRange.get(campo);
  }

  filterDateRange() {
    if (this.formDateRange.valid) {
      let fechaIni = new Date(this.f(this.fechaDesde).value);
      let fechaFin = this.f(this.fechaHasta).value != null ? new Date(this.f(this.fechaHasta).value) : new Date(Date.now());
      //fechaIni.setDate(fechaIni.getDate() - 1)
      fechaFin.setDate(fechaFin.getDate() + 1)
      fechaIni.setHours(0,0,0);
      fechaFin.setHours(23,59,0)
      console.log("fechas",fechaIni,fechaFin)
      this.ventasService.getVentasByDate(fechaIni,fechaFin).subscribe(res=>{
        console.log(res);
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
          console.log("venta borrado");
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
    this.ventasService.getVentas().subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  createPDF(venta:VentasModel) {
    console.log(venta)
    this.customerService.getAllClientbyId(venta.id_cliente).subscribe((res:CustomersModel) => {
      console.log(res);
      this.generatePDF(venta, res);
    })
  }

  async generatePDF(venta:VentasModel, cliente: CustomersModel){
    console.log(venta)
    var fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
      },
    };

    var estadoBoleta = "Pagado"
    var fecha_hoy = new Date (Date.now()).toLocaleDateString('en-GB');
    var fecha_entrega = new Date (Date.now()).toLocaleDateString("es-CL", {
      weekday: "long", // narrow, short
      year: "numeric", // 2-digit
      month: "long", // numeric, 2-digit, narrow, long
      day: "numeric" // 2-digit
    });
    var hora_entrega = new Date (Date.now()).toLocaleTimeString("es-CL", {
      timeZone: "America/Bogota",
      hour12: true, // false
      hour: "numeric", // 2-digit
      minute: "2-digit", // numeric
      second: "2-digit" // numeric
    });
    var simboloNuevoSol = 'S/. ';
    var numeroBoleta = '#MN0131';

    var direccionEmpresa = 'Calle Santa Marta 218, Arequipa';
    var correoEmpresa = 'raulcg1234@hotmail.com ';
    var felefonoEmpresa = '955 739 464';

    var nombresCliente = venta.nombre_cliente ;
    var fnacimientoCliente = '14/02/96';
    var direccionCliente = 'Calle Leticia 104, Carmen Alto Cayma, Arequipa';
    var correoCliente = 'renzo.sucari@gmail.com';
    var telefonoCliente = '983 720 150';

    var externalDataRetrievedFromServer = [
      { num_orden: 1, detalle: 'Nike N012 Running Shoes', precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 2, detalle: 'Adidas Running Shoes'   , precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 3, detalle: 'Nike N012 Running Shoes', precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 4, detalle: 'Adidas Running Shoes'   , precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 5, detalle: 'Nike N012 Running Shoes', precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 6, detalle: 'Adidas Running Shoes'   , precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 7, detalle: 'Nike N012 Running Shoes', precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 8, detalle: 'Adidas Running Shoes'   , precio: 140.45, cantidad: 1, total: 154.15 },
      { num_orden: 9, detalle: 'Nike N012 Running Shoes', precio: 140.45, cantidad: 1, total: 154.15 },
    ];

    function buildTableBody(data, columns) {
      var body = [];
  
      body.push([{ text: 'No.', style: 'tableHeader', alignment: 'center' }, { text: 'Detalle', style: 'tableHeader', alignment: 'center' }, { text: 'Precio', style: 'tableHeader', alignment: 'center' }, { text: 'Cantidad', style: 'tableHeader', alignment: 'center' }, { text: 'Total', style: 'tableHeader', alignment: 'center' }]);
  
      data.forEach(function(row) {
          var dataRow = [];
  
          columns.forEach(function(column) {
            //dataRow.push({ text: row[column].toString(), style: 'cell', alignment: 'center' },);
            dataRow.push(row[column].toString());
          })
        
          body.push(dataRow);
      });

      body.push([{ text: ' ', rowSpan: 3, colSpan: 2}, { }, {text: 'Sub. Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, { }, { text: simboloNuevoSol+'510.00', style: 'contenido', alignment: 'right' }]);
      body.push([{ }, { }, { text: 'IGV (18%) :', style: 'tableHeader', alignment: 'right', colSpan: 2}, { }, { text: simboloNuevoSol+'13.00', style: 'contenido', alignment: 'right' }]);
      body.push([{ }, { }, { text: 'Total:', style: 'tableHeader', alignment: 'right', colSpan: 2}, { }, { text: simboloNuevoSol+'498.00', style: 'contenido', alignment: 'right' }]);
  
      return body;
    }

    function table(data, columns) {
      return {
        style: 'tableMargin',
        color: '#444',
          table: {
            widths: [25, '*', 63, 60, 63],
            heights: [20, 20 , 20, 20],
            headerRows: 1,
            body: buildTableBody(data, columns)
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
      pageMargins: [ 40, 60, 40, 60 ],
      content: [
        {
          style: 'tableMargin',
          table: {
            widths: ['*', '*'],
            body: [
              [{ image: await getBase64ImageFromURL('/assets/images/logo-dark.png'), width: 150 }, { text: 'Nº de Boleta: ' + numeroBoleta, style: 'tableHeader', rowSpan: 4, alignment: 'right' }],
              [{ text: direccionEmpresa  }, {}],
              [{ text: correoEmpresa  }, {}],
              [{ text: felefonoEmpresa  }, {}],
            ]
          },
          layout: 'noBorders'
        },

        {
          style: 'tableMargin',
          table: {
            widths: ['*', '*'],
            body: [
              [{ text: 'Facturado a:', style: 'tableHeader' }, { text: 'Nº de Boleta:', style: 'tableHeader', alignment: 'right' }],
              [{ text: nombresCliente, style: 'subtitulo' }, {text: numeroBoleta, style: 'contenido', alignment: 'right'}],
              [{ text: 'Fecha de Nacimiento: '+fnacimientoCliente, style: 'contenido'  }, {text: 'Fecha de la Boleta:', style: 'tableHeader', alignment: 'right'}],
              [{ text: 'Correo: '+correoCliente, style: 'contenido' }, {text: fecha_hoy, style: 'contenido', alignment: 'right'}],
              [{ text: 'Telefono: '+telefonoCliente, style: 'contenido'  }, { }],
            ]
          },
          layout: 'noBorders'
        },

        { text: 'Resumen del pedido:', style: 'subtitulo' },

        table(externalDataRetrievedFromServer, ['num_orden', 'detalle', 'precio', 'cantidad', 'total']),

        {
          text: [,
            { text: 'Fecha de Entrega: ', style: 'textBold'},
            fecha_entrega, 
            '   ', 
            { text: 'Hora: ', style: 'textBold'},
            hora_entrega,
          ]
        },

        { text: 'Nota:', style: 'subtitulo2' },
        { text: 'Todo trabajo se efectuara con un adelanto del 50%.', style: 'contenido2', alignment: 'justify'},
        { text: 'La empresa no se responsabiliza de los pedidos no recogidos después de un mes.', style: 'contenido2', alignment: 'justify'},
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
