import { DecimalPipe,formatDate } from '@angular/common';
import { Component, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
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

import { getBase64ImageFromURL } from 'src/utils/functions';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class ListCustomersComponent implements OnInit {

  mostrarSpinner = false;
  role = 'Admin'
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
  idSede: string = "";
  sedeActual = new SedesModel;

  lettersPattern = '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'; // Incluimos Ññ y tildes en cada vocal
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
    private customerService: ClienteService,
    private usuarioService: UsuarioService,) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Clientes' }, { label: 'Lista de Clientes', active: true }];
    this.crearFormulario();
    this.getListSedes();
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
      this.f(this.direccion).setValue(data.direccion);

      this.f(this.od_cilindrico).setValue(data.medidas[0].od_cilindrico >= 0 ? '+'+data.medidas[0].od_cilindrico.toFixed(2) : data.medidas[0].od_cilindrico.toFixed(2));
      this.f(this.od_eje).setValue(data.medidas[0].od_eje);
      this.f(this.od_esferico).setValue(data.medidas[0].od_esferico >= 0? '+'+data.medidas[0].od_esferico.toFixed(2): data.medidas[0].od_esferico.toFixed(2));

      this.f(this.oi_cilindrico).setValue(data.medidas[0].oi_cilindrico >= 0 ? '+'+data.medidas[0].oi_cilindrico.toFixed(2): data.medidas[0].oi_cilindrico.toFixed(2));
      this.f(this.oi_esferico).setValue(data.medidas[0].oi_esferico >= 0? '+'+data.medidas[0].oi_esferico.toFixed(2) : data.medidas[0].oi_esferico.toFixed(2) );
      this.f(this.oi_eje).setValue(data.medidas[0].oi_eje);

      this.f(this.dip).setValue(data.medidas[0].dip);
      this.f(this.add).setValue(data.medidas[0].add >= 0 ? '+'+data.medidas[0].add.toFixed(2): data.medidas[0].add.toFixed(2));
      this.f(this.encargado).setValue(data.medidas[0].encargado);
      this.f(this.antecedentes).setValue(data.antecedentes);
      this.customer.id_cliente = data.id_cliente;
      this.modalService.open(centerDataModal, { scrollable: true, centered: true, size: 'lg'});
    }

    centerModalPrint(centerDataModal: any, data: CustomersModel) {
      this.fecha_actual = new Date(Date.now());
      this.userPrint = data;
      this.modalService.open(centerDataModal, { scrollable: true, centered: true, size: 'lg'});
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
    this.userPrint = {} as CustomersModel;
    this.modalService.dismissAll();
  }
  /**
   * Close event modal
   */
  closeEventModalGeneral() {
    this.modalService.dismissAll();
  }

  /**
   * guarda cliente en la base de datos
   */
  guardarCliente() {
    if(this.formCustomer.valid){
      this.customer.apellidos = this.f(this.apellidos).value;
      this.customer.dni = this.f(this.dni).value;
      this.customer.fecha_modificacion = new Date(Date.now());
      this.customer.direccion = this.f(this.direccion).value;
      const fch_nac = new Date(this.f(this.fecha_nacimiento).value+'T00:00');
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
      Sweetalert("loading", "Cargando...");
      this.customerService.updateClient(this.customer.id_cliente,this.customer).subscribe( res=>{
        this.modalService.dismissAll();
        this.getListClients();
        this.formCustomer.reset();
        Sweetalert("close",null);
        Sweetalert("success","Datos del cliente actualizados");
      }) ;  
    } else {
      return
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
      [this.dni]:[{value: null, disabled: true}],

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

      [this.fecha_modificacion]:[{value: null, disabled: true}],

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

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
    this.sedeActual = this.getSedeActual(this.idSede,this.listSedes);
  }

  getSedeActual (idSede:string, sedes:any): SedesModel {
    let sedeActual = sedes.find(sede => sede.id_sede === idSede);
    return sedeActual;
  }

  createPDF() {
    let objReceta = {
      cliente: this.userPrint,
      sede: this.sedeActual
    }
    this.customerService.getRecetaPDF(objReceta).subscribe(res => {
      const byteArray = new Uint8Array(
        atob(res)
          .split("")
          .map(char => char.charCodeAt(0))
      );


      const blob = new Blob([byteArray], {type:'application/pdf'});

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = 'none';
      document.body.appendChild(a);
      a.href = url;
      a.download = "receta";
      a.click();
    })
  }

  async createPDFfront(){
    var fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
      },
      
    };
    var fecha_hoy = new Date (Date.now()).toLocaleDateString('en-GB');

    var numeroReceta = 'Nº 000901';
    var propietarioEmpresa = 'Raúl J. Condori Ramos'
    var direccionEmpresa = 'Jr: Arequipa 347 - Puno';
    var felefonoEmpresa = '954170390 - 930314556';
    var primeraRecomnedacion = 'Al empezar a usar los nuevos lentes, es de esperar ciertas incomodidades; ejemplo enturbamiento en la visión a distancia, elevación o inclinacion del nivel del piso, ligera sensación de mareo, que luego desaparece.';
    var segundaRecomendacion = 'Acuda personalmente donde el óptico, para un correcto montaje de sus lentes. Vuelva al optómetra para verificar la correcta preparación de sus lentes.';

    var nombresCliente = this.userPrint.nombres;
    var apellidosCliente = this.userPrint.apellidos;
    var dniCliente = this.userPrint.dni;
    var fnacimientoCliente = new Date (this.userPrint.fecha_nacimiento).toLocaleDateString('en-GB');
    var telefonoCliente = this.userPrint.telefono ? this.userPrint.telefono : "Sin especificar.";


    var od_esf_Cliente = this.userPrint.medidas[0].od_esferico > 0? '+'+this.userPrint.medidas[0].od_esferico.toFixed(2): this.userPrint.medidas[0].od_esferico.toFixed(2) ;
    var od_cil_Cliente = this.userPrint.medidas[0].od_cilindrico > 0 ? '+'+this.userPrint.medidas[0].od_cilindrico.toFixed(2) : this.userPrint.medidas[0].od_cilindrico.toFixed(2);
    var od_eje_Cliente = this.userPrint.medidas[0].od_eje;

    var oi_esf_Cliente = this.userPrint.medidas[0].oi_esferico > 0? '+'+this.userPrint.medidas[0].oi_esferico.toFixed(2): this.userPrint.medidas[0].oi_esferico.toFixed(2) ;
    var oi_cil_Cliente = this.userPrint.medidas[0].oi_cilindrico > 0 ? '+'+this.userPrint.medidas[0].oi_cilindrico.toFixed(2) : this.userPrint.medidas[0].oi_cilindrico.toFixed(2);
    var oi_eje_Cliente = this.userPrint.medidas[0].oi_eje;

    var dip_Cliente = this.userPrint.medidas[0].dip;
    var add_Cliente = this.userPrint.medidas[0].add > 0 ? '+'+this.userPrint.medidas[0].add.toFixed(2): this.userPrint.medidas[0].add.toFixed(2)

    var encargadoCliente = this.userPrint.medidas[0].encargado ? this.userPrint.medidas[0].encargado : " " ;
    var antecedentesCliente = this.userPrint.antecedentes ? this.userPrint.antecedentes : "Sin atecedentes.";
    
    const pdfDefinition: any = {
      pageSize: 'A4',
      //pageOrientation: 'landscape',
      pageMargins: [ 40, 10, 40, 10 ], // left, top, right, botton
      content: [

        // LOGO y DATOS DE LA EMPRESA
        {
          style: 'tableBasic',
          table: {
            widths: ['auto', '*'],
            body: [
              [{ image: await getBase64ImageFromURL('/assets/images/logo-dark.png'), width: 230, rowSpan: 4 }, { text: 'Receta:', style: 'subtitle', alignment: 'right' }],
              [{ }, { text: numeroReceta, alignment: 'right' }],
              [{ }, { text: 'Fecha:', style: 'subtitle', alignment: 'right' }],
              [{ }, { text: fecha_hoy, alignment: 'right' }],
              [{ text: 'De ' + propietarioEmpresa, alignment: 'center' }, { }],
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
            widths: ['*', '*', '*'],
            body: [
              [{ text: 'Paciente: ' + nombresCliente + apellidosCliente, style: 'title', alignment: 'left', colSpan: 2 }, { }, { text: 'DNI: ' + dniCliente, style: 'text', alignment: 'left'}],
              [{ text: 'F. Nac.: ' + fnacimientoCliente, style: 'text', alignment: 'left'}, { text: 'Ocupación: ', style: 'text', alignment: 'left'}, { text: 'Cel: ' + telefonoCliente, style: 'text', alignment: 'left'}],
            ]
          },
          layout: {
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 1 : 0;
            },
          }
        },

        // VISION DE LEJOS 

        {
          style: 'tableBasic',
          table: {
            widths: [150],
            heights: [15],
            body: [
              [{ text: 'VISIÓN DE LEJOS: ', style: 'title2', alignment: 'left' , fillColor: '#2D4497', fillOpacity: 0.80 } ],
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
                          { text: 'ADD.', style: 'title', alignment: 'center', fillColor: '#d8e3fc' },
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



        // DIAGNÓSTICO 
        {
          style: 'tableBasic',
          table: {
            widths: ['*', '*', '*', '*'],
            heights: [15],
            body: [
              [ 
                { text: 'DIAGNÓSTICO: ', alignment: 'left', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80 },
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'Miopia', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'Hipermetropía', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'Astigmatismo', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
              ],

              [
                '',
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'Presbicia', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'Ojo Vago', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'Ambliopia', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
              ]
            ]
          },
          layout: {
            defaultBorder: false,
            paddingLeft: function(i, node) { return 10; },
          }
        },

        // TIPO DE LENTES
        {
          style: 'tableBasic',
          table: {
            widths: ['*', '*', '*'],
            heights: [15],
            body: [
              [
                { text: 'TIPO DE LENTES: ', alignment: 'left', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80 },
                '',
                { text: 'SE RECOMIENDA', alignment: 'center', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80 },
              ],
              [
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'MONOFOCALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'ORGÁNICOS', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'ANTIREFLEX', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
              ],

              [
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'BIFOCALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'CRISTALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'FOTOCROMÁTICOS', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
              ],

              [
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'MULTIFOCALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'POLICARBONATO', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
                [
                  {
                    table: {
                      widths: [10, '*'],
                      body: [
                        [' ', { text: 'LC', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                      ]
                    },
                  },
                ],
              ]

            ]
          },
          layout: {
            paddingLeft: function(i, node) { return 10; },
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 1 : 0;
            },
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 1 : 0;
            },
          }
        },


        // OBSERVACIONES
        {
          style: 'tableBasic2',
          table: {
            widths: [350, '*'],
            heights: [30],
            body: [
              [{ text: 'OBSERVACIONES: ', style: 'title', alignment: 'left' }, { text: encargadoCliente, style: 'text', alignment: 'center' } ],
              [{ }, { text: 'Especialista', style: 'text', alignment: 'center',  border: [false, true, false, false] }],
            ]
          },
          layout: {
            defaultBorder: false,
          }

        },
        


        // TICKET
        {
          style: 'tableBasic',
          table: {
            widths: ['auto', '*'],
            body: [
              [{ image: await getBase64ImageFromURL('/assets/images/logo-dark.png'), width: 150, rowSpan: 3, border: [false, true, false, false] }, { text: ' ', border: [false, true, false, false] }],
              [{ }, { text: direccionEmpresa, style: 'title', alignment: 'center' }],
              [{ }, { text: 'Cel: ' + felefonoEmpresa,  style: 'title', alignment: 'center' }],
              [{ text: 'De ' + propietarioEmpresa, alignment: 'left' }, { }],
            ],
          },
          layout: {

            defaultBorder: false,

            hLineStyle: function (i, node) {
              if (i === 0) {
                return { dash: { length: 10, space: 4 } };
              }
              return null;
            },
          }
        },

        // DATOS DEL CLIENTE
        {
          style: 'tableBasic',
          table: {
            widths: ['*', 100],
            body: [
              [{ text: 'Paciente: ' + nombresCliente + apellidosCliente, style: 'title', alignment: 'left' }, { text: 'DNI: ' + dniCliente, style: 'text', alignment: 'left'}],
              [{ text: 'FECHA DE CONTROL: ', color: '#2D4497', style: 'title', alignment: 'left' }, { text: 'Cel: ' + telefonoCliente, style: 'text', alignment: 'left'}],
            ]
          },
          layout: {
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 1 : 0;
            },
          }
        },

        // RECOMENDACIONES
        {
          style: 'tableBasic',
          table: {
            widths: [350, '*'],
            body: [
              [{ text: 'RECOMENDACIONES: ', color: '#2D4497', style: 'subtitle', alignment: 'left'   }, { } ],
              [{ text: primeraRecomnedacion, color: '#2D4497', style: 'small', alignment: 'left' }, { text: encargadoCliente, style: 'text', alignment: 'center' }],
              [{ text: segundaRecomendacion, color: '#2D4497', style: 'small', alignment: 'left' }, { text: 'Especialista', color: '#2D4497', style: 'text', alignment: 'center', border: [false, true, false, false],}],
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
          margin: [0, 3, 0, 3],
        },

        tableBasic2: {
          color: '#2D4497',
          margin: [0, 3, 0, 7],
        },

      },

    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
