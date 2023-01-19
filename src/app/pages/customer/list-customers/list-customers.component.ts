import { DecimalPipe,formatDate } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { CustomersModel } from 'src/models/customer';
import { MedidasModel } from 'src/models/medidas';
import { CustomerService } from './customer.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class ListCustomersComponent implements OnInit {

  // modal
  editEvent: any;
  formCustomer: FormGroup;
  nombres: string = "campoNombres";
  apellidos: string = "campoApellidos";
  dni: string = "campoDNI";
  telefono:string = "campoTelefono";
  fecha_nacimiento: string = "campoFechaNacimiento";
  fecha_modificacion: string = "campoFechaModificacion";
  email: string = "campoEmail";
  od_esferico: string = "campoOdEsferico";
  od_cilindrico: string = "campoOd_Cilindrico";
  od_eje: string = "campoOdEje";
  oi_esferico: string = "campoOiEsferico";
  oi_cilindrico: string = "campoOiCilindrico";
  oi_eje: string = "campoOiEje";
  dip: string = "campoDip";
  add: string = "campoAdd";
  encargado: string = "campoEncargado";
  antecedentes: string = "campoAntecedentes";
  direccion: string = "campoDireccion";
  customer = new CustomersModel;
  medidas = new MedidasModel;
  submitted = false;

  lettersPattern = '[a-zA-Z ]*';
  numberPattern = '^[0-9]+$|^\S*$';
  esf_cylPattern = '(^[\-+\+][0-9]{1,2})+([.][0-9]{1,2})?$'
  addPattern = '(^[\+][0-9]{1,2})+([.][0-9]{1,2})?$';

  listRoles = [
    { cNombre:1, tNombre: "Admin" },
    { cNombre:2, tNombre: "Vendedor" },
    { cNombre:3, tNombre: "Contador" }
  ];
  listSedes = [
    { cNombre:1, tNombre: "Lima" },
    { cNombre:2, tNombre: "Arequipa" },
    { cNombre:3, tNombre: "Cuzco" }
  ];

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  
  customers$: Observable<CustomersModel[]>;
  total$: Observable<number>;
  userPrint: CustomersModel;
  
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  fecha_actual: Date;

  constructor(
    public service: CustomerService, 
    private modalService: NgbModal, 
    private fb: FormBuilder,
    private customerService: ClienteService) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Clientes' }, { label: 'Lista de Clientes', active: true }];
    this.crearFormulario();
  }

  f(campo:any){
    return this.formCustomer.get(campo);
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
     centerModal(centerDataModal: any, data: CustomersModel) {
      this.fecha_actual = new Date(Date.now());
      this.f(this.dni).setValue(data.dni);
      this.f(this.fecha_modificacion).setValue(formatDate(this.fecha_actual,'yyyy-MM-dd','en'));
      this.f(this.nombres).setValue(data.nombres);
      this.f(this.apellidos).setValue(data.apellidos);
      this.f(this.fecha_nacimiento).setValue(formatDate(data.fecha_nacimiento,'yyyy-MM-dd','en'));
      this.f(this.telefono).setValue(data.telefono);
      this.f(this.email).setValue(data.email);
      this.f(this.od_cilindrico).setValue(data.medidas[0].od_cilindrico);
      this.f(this.od_eje).setValue(data.medidas[0].od_eje);
      this.f(this.od_esferico).setValue(data.medidas[0].od_esferico);
      this.f(this.oi_cilindrico).setValue(data.medidas[0].oi_cilindrico);
      this.f(this.oi_esferico).setValue(data.medidas[0].oi_esferico);
      this.f(this.oi_eje).setValue(data.medidas[0].oi_eje);
      this.f(this.dip).setValue(data.medidas[0].dip);
      this.f(this.add).setValue(data.medidas[0].add);
      this.f(this.encargado).setValue(data.medidas[0].encargado);
      this.f(this.antecedentes).setValue(data.antecedentes);
      this.customer.id_cliente = data.id_cliente;
      this.customer.id_persona = data.id_persona;
      this.modalService.open(centerDataModal, { centered: true, size: 'lg'});
    }

    centerModalPrint(centerDataModal: any, data: CustomersModel) {
      //console.log(data)
      this.userPrint = data;
      console.log(this.userPrint)
      this.modalService.open(centerDataModal, { centered: true, size: 'lg'});
    }

    /**
     * Open Large modal
     * @param centerModal_Info large modal data
     */
    centerModal_Info(centerModal_Info: any) {
      this.modalService.open(centerModal_Info, { size: 'lg',windowClass:'modal-holder', centered: true });
    }


      /**
   * Delete event
   */
  deleteEventData() {
    this.editEvent.remove();
    this.modalService.dismissAll();
  }

  closeEventModal() {
    this.modalService.dismissAll();
  }
  /**
   * Close event modal
   */

  /**
   * guarda cliente en la base de datos
   */
  guardarCliente() {
    if(this.formCustomer.valid){
      this.customer.apellidos = this.f(this.apellidos).value;
      this.customer.dni = this.f(this.dni).value;
      this.customer.fecha_modificacion = new Date(Date.now());
      const fch_nac = new Date(this.f(this.fecha_nacimiento).value);
      this.customer.fecha_nacimiento = fch_nac;
      this.customer.nombres = this.f(this.nombres).value;
      this.customer.telefono = this.f(this.telefono).value;
      this.customer.email = this.f(this.email).value;
      this.customer.antecedentes = this.f(this.antecedentes).value;
      this.medidas.add = Number(this.f(this.add).value);
      this.medidas.dip = Number(this.f(this.dip).value);
      this.medidas.encargado = this.f(this.encargado).value;
      this.medidas.od_cilindrico = Number(this.f(this.od_cilindrico).value);
      this.medidas.od_eje = Number(this.f(this.od_eje).value);
      this.medidas.od_esferico = Number(this.f(this.od_esferico).value);
      this.medidas.oi_cilindrico = Number(this.f(this.oi_cilindrico).value);
      this.medidas.oi_eje = Number(this.f(this.oi_eje).value);
      this.medidas.oi_esferico = Number(this.f(this.oi_esferico).value); 
      const listaMedidas = []
      listaMedidas.push(this.medidas);
      this.customer.medidas = listaMedidas;
      console.log(this.customer);
      this.customerService.updateClient(this.customer.id_cliente,this.customer.id_persona,this.customer).subscribe( res=>{
        console.log("registrado ok");
        this.getListClients();
        this.modalService.dismissAll();
      }) ; 
    }
    
  } 

  getListClients() {
    this.customerService.getAllClients().subscribe( res=>{
      this.service.updateTable(res);
    })
  }
  /**
   * Save the event
   */
  /* saveEvent() {
    if (this.formData.valid) {

    }
    this.submitted = true;
  } */
  crearFormulario() {
    this.formCustomer = this.fb.group({
      [this.dni]:[null,[
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.min(11111111),
        Validators.max(99999999)
      ]],
      [this.nombres]:[null,[
        Validators.required,
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.apellidos]:[null,[
        Validators.required,
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.fecha_nacimiento]:[],
      [this.telefono]:[null,[
        Validators.pattern(this.numberPattern),
        Validators.min(111111111),
        Validators.max(999999999)
      ]],
      [this.email]: [null,[
        Validators.email
      ]],
      [this.direccion]: [],
      [this.antecedentes]:[],

      [this.fecha_modificacion]:[],

      [this.od_esferico]:[null,[
        Validators.required,
        Validators.pattern(this.esf_cylPattern),
        Validators.max(+20),
        Validators.min(-20)
      ]],
      [this.od_cilindrico]:[null,[
        Validators.required,
        Validators.pattern(this.esf_cylPattern),
        Validators.max(+20),
        Validators.min(-20)
      ]],
      [this.od_eje]:[null,[
        Validators.required,
        Validators.max(+180),
        Validators.min(0)
      ]],
      [this.oi_esferico]:[null,[
        Validators.required,
        Validators.pattern(this.esf_cylPattern),
        Validators.max(+20),
        Validators.min(-20)
      ]],
      [this.oi_cilindrico]:[null,[
        Validators.required,
        Validators.pattern(this.esf_cylPattern),
        Validators.max(+20),
        Validators.min(-20)
      ]],
      [this.oi_eje]:[null,[
        Validators.required,
        Validators.max(+180),
        Validators.min(0)
      ]],
      [this.dip]:[null,[
        Validators.required,
        Validators.max(+80),
        Validators.min(0)
      ]],
      [this.add]:[null,[
        Validators.pattern(this.addPattern), // Solo iniciara con un + (ejem. +0.00 - +10.00)
        Validators.max(+10),
        Validators.min(0)
      ]],
      [this.encargado]:[null,[
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]]
    })
  }

  eliminar(data: CustomersModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar al cliente?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.customerService.darBajaClient(data.id_cliente).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Cliente eliminada");
          console.log("Cliente borrado");
          this.updateListCustomers();
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
          'Cliente no eliminado',
          'error'
        );
      }
    }
    );
  }

  updateListCustomers() {
    this.customerService.getAllClients().subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  /**
   * Returns form Editar Cliente
   */
  get formEC() {
    return this.formCustomer.controls;
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

  async createPDF(){
    var fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
      },
      
    };
    var fecha_nacimiento = new Date (this.userPrint.fecha_nacimiento).toLocaleDateString('en-GB')
    

    const pdfDefinition: any = {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: ['*', '*'],
            body: [
              [{ image: await this.getBase64ImageFromURL('/assets/images/logo-dark.png'), width: 150, rowSpan: 4 }, { text: 'Nº de Receta:', style: 'tableHeader', alignment: 'right' }],
              [{ }, { text: '#MN0131', alignment: 'right' }],
              [{ }, { text: 'Fecha de la Receta:', style: 'tableHeader', alignment: 'right' }],
              [{ }, { text: '15 Dic, 2022', alignment: 'right' }],
            ]
          },
          layout: 'noBorders'
        },

        { 
          text: 'Paciente:', style: 'subtitle'
        },

        this.userPrint.nombres + ' ' + this.userPrint.apellidos,

        {
          text: [,
            { text: 'Fecha de Nacimiento:', style: 'textBold'},
            ' ' + fecha_nacimiento,
          ]
        },

        {
          text: [,
            { text: 'Telefono:', style: 'textBold'},
            ' ' + this.userPrint.telefono,
          ]
        },

        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: ['*', '*', '*', '*', '*', 100],
            heights: [20, 20 , 20, 20],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [{ text: 'Visión de Lejos', style: 'tableHeader', colSpan: 5, alignment: 'center' }, {} , {} , {} , {}, { text: 'Visión de Cerca', style: 'tableHeader', alignment: 'center' }],
              [{ text: 'REF.', style: 'tableHeader', alignment: 'center' }, { text: 'ESF.', style: 'tableHeader', alignment: 'center' }, { text: 'CIL.', style: 'tableHeader', alignment: 'center' }, { text: 'EJE.', style: 'tableHeader', alignment: 'center' }, { text: 'DIP.', style: 'tableHeader', alignment: 'center' }, { text: 'ADD.', style: 'tableHeader', alignment: 'center' }],
              [{ text: 'O.D.', style: 'tableHeader', alignment: 'center' }, { text: this.userPrint.medidas[0].od_esferico, alignment: 'center' }, { text: this.userPrint.medidas[0].od_cilindrico, alignment: 'center' }, { text: this.userPrint.medidas[0].od_eje, alignment: 'center' }, { text: this.userPrint.medidas[0].dip, alignment: 'center' }, { text: this.userPrint.medidas[0].add, rowSpan: 2, alignment: 'center' }],
              [{ text: 'O.I.', style: 'tableHeader', alignment: 'center' }, { text: this.userPrint.medidas[0].oi_esferico, alignment: 'center' }, { text: this.userPrint.medidas[0].oi_cilindrico, alignment: 'center' }, { text: this.userPrint.medidas[0].oi_eje, alignment: 'center' }, { text: this.userPrint.medidas[0].dip, alignment: 'center' }, {}],
            ]
          }
        },
        { text: 'Encargado Medición:', style: 'subtitle' },
        this.userPrint.medidas[0].encargado,
        { text: 'Antecedentes:', style: 'subtitle' },
        { text: this.userPrint.antecedentes, alignment: 'justify'},
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        subtitle: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
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
        textBold: {
          bold: true,
        }
      },

    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
 
  }
}
