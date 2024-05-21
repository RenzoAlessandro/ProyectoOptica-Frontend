import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SedeService } from 'src/app/services/sede.service';
import { SedesModel } from 'src/models/sedes';
import * as XLSX from 'xlsx';
import saveFile from 'save-as-file';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
import { MonturasModel } from 'src/models/monturas';
import { changeFormatDate, stringToDate } from 'src/utils/functions';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LunasModel } from 'src/models/lunas';
import { AccesorioModel } from 'src/models/accesorio';
import { Labels } from 'src/utils/labels';

@Component({
  selector: 'app-update-excel',
  templateUrl: './update-excel.component.html',
  styleUrls: ['./update-excel.component.scss']
})
export class UpdateExcelComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  listSedes: Array<SedesModel>;

  //formulario
  formExportar: FormGroup;
  formExportarCrear: FormGroup;
  formImportar: FormGroup;
  sede: string = "campoSede";
  producto: string = "campoProducto";

  sedeC: string = "campoSedeC";
  productoC: string = "campoProductoC";

  productos: string = "campoProductos";

  files: File[] = [];
  errorImagen = "";
  message: string;

  listProductos = [
    {
      id: 1, nombre: "Monturas",
    },
    {
      id: 2, nombre: "Lunas",
    },
    {
      id: 3, nombre: "Accesorios",
    },
  ];
  filebutton: boolean = false;
  idSede = '';
  constructor(
    private fb: FormBuilder,
    private productoService: ProductosService,
    private usuarioService: UsuarioService,
    private label: Labels
  ) { }



  ngOnInit() {
    this.getListSedes();
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Actualización por Excel', active: true }];
    this.message = "<div class='mb-3'><i class=\"display-4 text-muted uil uil-cloud-upload\"></i></div>Suelte los archivos aquí o haga clic para cargar.";
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }

  crearFormulario() {
    this.formExportar = this.fb.group({
      sede: [this.idSede, [Validators.required]],
      producto: [null, [Validators.required]],
    });

    this.formExportarCrear = this.fb.group({
      [this.sedeC]: [this.idSede, [Validators.required]],
      [this.productoC]: [null, [Validators.required]],
    });
    this.formImportar = this.fb.group({
      productos: [null, [Validators.required]],
    })
  }
  f(campo: string) {
    return this.formExportar.get(campo);
  }

  fC(campo: string) {
    return this.formExportarCrear.get(campo);
  }

  exportarProductos() {
    Sweetalert("loading", "Cargando...");
    if (this.formExportar.valid) {
      let productName = '';
      switch (this.f('producto').value) {
        case 1:
          productName = 'montura';
          break;
        case 2:
          productName = 'luna';
          break;
        case 3:
          productName = 'accesorio';
          break;
        default:
          break;
      }
      this.productoService.getProductosbySede(this.f('sede').value, productName).subscribe(res => {
        Sweetalert("close", null);
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        if (res.length == 0) {
          Sweetalert("success", "No existen productos");
        } else {
          let data = [];
          switch (productName) {
            case 'montura':
              data = res.map(monturas => {
                return {
                  "ID MONTURA": monturas.id_producto,
                  //"ORDEN": monturas.num_orden,
                  "PRECIO COMPRA": monturas.precio_montura_c,
                  "PRECIO VENTA": monturas.precio_montura_v,
                  "TALLA": monturas.talla,
                  "CODIGO": monturas.codigo,
                  "CODIGO MONTURA": monturas.codigo_montura,
                  "MARCA": monturas.marca,
                  "CANTIDAD": monturas.cantidad,
                  "COLOR": monturas.color,
                  "MATERIAL": monturas.material,
                  "TIPO": monturas.tipo,
                  "SEDE": monturas.id_sede,
                  "FECHA INGRESO": new Date(monturas.fecha_creacion_monturas).toLocaleDateString('en-GB')
                }
              })
              break;
            case 'luna':
              data = res.map((lunas: LunasModel) => {
                return {
                  "ID LUNA": lunas.id_producto,
                  "PRECIO COMPRA": lunas.precio_luna_c,
                  "PRECIO VENTA": lunas.precio_luna_v,
                  //"CODIGO INTERNO": lunas.codigo_interno,
                  "CANTIDAD": lunas.cantidad,
                  "MATERIAL": lunas.material,
                  "TIPO": lunas.tipo,
                  "SEDE": lunas.id_sede,
                  "FECHA INGRESO": new Date(lunas.fecha_creacion_luna).toLocaleDateString('en-GB')
                }
              })
              break;
            case 'accesorio':
              data = res.map((accesorios: AccesorioModel) => {
                return {
                  "ID ACCESORIO": accesorios.id_producto,
                  "NOMBRE": accesorios.nombre_accesorio,
                  "PRECIO COMPRA": accesorios.precio_accesorio_c,
                  "PRECIO VENTA": accesorios.precio_accesorio_v,
                  //"CODIGO INTERNO": accesorios.codigo_interno,
                  "CANTIDAD": accesorios.cantidad,
                  "TIPO": accesorios.tipo,
                  "SEDE": accesorios.id_sede,
                  "FECHA INGRESO": new Date(accesorios.fecha_creacion_accesorio).toLocaleDateString('en-GB')
                }
              })
              break;
            default:
              break;
          }

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
          saveFile(blobData, productName + '_' + nombreSede.nombre_sede);
        }

      })




    } else {
      return;
    }
  }


  onSelect(event) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      this.errorImagen = "Solo un archivo";
      this.files = [];
      this.filebutton = false;
    }
    else {
      this.errorImagen = "";
      this.filebutton = true;
    }
  }

  onRemove(event) {
    this.filebutton = false;
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadFile() {
    //Sweetalert("loading", "Cargando...");
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(this.files[0]);
    fileReader.onload = (event: any) => {
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });
      let data: any;
      workbook.SheetNames.forEach(sheet => {
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { raw: false, defval: ""});
      });
      if (this.validarCampoFecha(data)) {
        switch ((data[0].TIPO).toLowerCase()) {
          case 'montura':
            if (data[0].hasOwnProperty(this.label.cabeceraExcelIdMont)) {
              this.actualizarProducto(data, data[0].TIPO);
            } else {
              this.crearProducto(data, data[0].TIPO);
            }
            break;
          case 'luna':
            if (data[0].hasOwnProperty(this.label.cabeceraExcelIdLun)) {
              this.actualizarProducto(data, data[0].TIPO);
            } else {
              this.crearProducto(data, data[0].TIPO);
            }
            break;
          case 'accesorio':
            if (data[0].hasOwnProperty(this.label.cabeceraExcelIdAccesorio)) {
              this.actualizarProducto(data, data[0].TIPO);
            } else {
              this.crearProducto(data, data[0].TIPO);
            }
            break;
          default:
            break;
        }
      } else {
        Sweetalert("error", "Excel con fechas incorrectas");
        return;
      }

    }
  }

  actualizarProducto(data: any, tipoProducto: string) {
    let producto: Array<any>;
    if (this.validarCabeceraExcelUpdate(data, tipoProducto)) {
      producto = this.objExceltoDBUpdate(data, tipoProducto);
      const idSede = producto[0].id_sede
      if (this.validarIdSede(data, idSede) && this.validarTipo(data, tipoProducto)) {
        Sweetalert("loading", "Cargando...");
        this.productoService.updateProductsbyExcel(producto).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Lista de " + tipoProducto + " actualizada");
          this.files = [];
          this.filebutton = false;
        })
      } else {
        Sweetalert("error", "Columna ID SEDE o TIPO incorrectos o faltantes");
      }


    } else {
      Sweetalert("error", "Excel con cabecera incorrecta");
      return;
    }


  }

  crearProducto(data: any, tipoProducto: string) {
    let producto: Array<any>;
    if (this.validarCabeceraExcelCreate(data, tipoProducto)) {
      producto = this.objExceltoDBCreate(data, tipoProducto);
      const idSede = producto[0].id_sede
      /* if (this.validarIdSede(data, idSede) && this.validarTipo(data, tipoProducto)) {
        Sweetalert("loading", "Cargando...");
        this.productoService.createProductsbyExcel(producto).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Lista de " + tipoProducto + " creada");
          this.files = [];
          this.filebutton = false;
        }) 
      } else {
        Sweetalert("error", "Columna ID SEDE o TIPO incorrectos o faltantes");
        return;
      } */
    } else {
      Sweetalert("error", "Excel con cabecera incorrecta");
      return;
    }

  }

  objExceltoDBCreate(data: any, tipo: string): Array<any> {
    let listMontura: Array<MonturasModel>;
    let listLuna: Array<LunasModel>;
    let listAccesorio: Array<AccesorioModel>;
    switch (tipo.toLowerCase()) {
      case 'montura':
        listMontura = data.map((element) => {
          return {
            material: element.MATERIAL == '' ? 'SIN ESPECIFICAR' : element.MATERIAL,
            marca: element.MARCA == '' ? 'SIN ESPECIFICAR' : element.MARCA,
            codigo: element.CODIGO == '' ? 'SIN ESPECIFICAR' : element.CODIGO,
            codigo_montura: element['CODIGO MONTURA'] == '' ? 'SIN ESPECIFICAR' : element['CODIGO MONTURA'],
            talla: element.TALLA == '' ? 'SIN ESPECIFICAR' : element.TALLA,
            color: element.COLOR == '' ? 'SIN ESPECIFICAR' : element.COLOR,
            precio_montura_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
            precio_montura_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            id_sede: element.SEDE,
            habilitado: true,
            fecha_creacion_monturas: stringToDate(element[this.label.cabeceraExcelFIngreso]),
            fecha_modificacion_monturas: new Date(Date.now()),
          }
        })
        listMontura.forEach(element => {
          element.tipo = tipo.toLowerCase()
        });
        return listMontura
      case 'luna':
        listLuna = data.map(element => {
          return {
            //num_orden: Number(element.ORDEN),
            material: element.MATERIAL == '' ? 'SIN ESPECIFICAR' : element.MATERIAL,
            precio_luna_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
            precio_luna_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            id_sede: element.SEDE,
            habilitado: true,
            fecha_creacion_luna: stringToDate(element[this.label.cabeceraExcelFIngreso]),
            fecha_modificacion_luna: new Date(Date.now()),
          }
        })
        listLuna.forEach(element => {
          element.tipo = tipo.toLowerCase()
        });
        return listLuna;
      case 'accesorio':
        listAccesorio = data.map(element => {
          return {
            //num_orden: Number(element.ORDEN),
            nombre_accesorio: element['NOMBRE'] == '' ? 'SIN ESPECIFICAR' : element['NOMBRE'],
            precio_accesorio_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
            precio_accesorio_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
            fecha_creacion_accesorio: stringToDate(element[this.label.cabeceraExcelFIngreso]),
            fecha_modificacion_accesorio: new Date(Date.now()),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            id_sede: element.SEDE,
            habilitado: true,
          }
        })
        listAccesorio.forEach(element => {
          element.tipo = tipo.toLowerCase()
        });
        return listAccesorio;
      default:
        break;
    }
  }

  objExceltoDBUpdate(data: any, tipo: string): Array<any> {
    let listMontura: Array<MonturasModel>;
    let listLuna: Array<LunasModel>;
    let listAccesorio: Array<AccesorioModel>;
    switch (tipo.toLowerCase()) {
      case 'montura':
        listMontura = data.map(element => {
          return {
            id_producto: element['ID MONTURA'],
            precio_montura_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
            precio_montura_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            fecha_modificacion_monturas: new Date(Date.now()),
            tipo: element.TIPO,
            id_sede: element.SEDE,
            codigo_montura: element['CODIGO MONTURA']
          }
        })
        return listMontura
      case 'luna':
        listLuna = data.map(element => {
          return {
            id_producto: element['ID LUNA'],
            precio_luna_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
            precio_luna_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            fecha_modificacion_luna: new Date(Date.now()),
            tipo: element.TIPO,
            id_sede: element.SEDE
          }
        })

        return listLuna;
      case 'accesorio':
        listAccesorio = data.map(element => {
          return {
            id_producto: element['ID ACCESORIO'],
            precio_accesorio_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
            precio_accesorio_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
            fecha_modificacion_accesorio: new Date(Date.now()),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            id_sede: element.SEDE,
            tipo: element.TIPO
          }
        })

        return listAccesorio;
      default:
        break;
    }
  }

  validarCabeceraExcelCreate(data: any, tipoProducto: string): boolean {
    switch (tipoProducto.toLowerCase()) {
      case 'montura':
        return ((Object.keys(data[0]).length == 12)&& data[0].hasOwnProperty(this.label.cabeceraExcelCodMontura) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial) && data[0].hasOwnProperty(this.label.cabeceraExcelMarca) && data[0].hasOwnProperty(this.label.cabeceraExcelCodigo) &&
          data[0].hasOwnProperty('TALLA') && data[0].hasOwnProperty('COLOR') && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
          data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede))
      case 'luna':
        return ((Object.keys(data[0]).length == 7) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
          data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede))
      case 'accesorio':
        return ((Object.keys(data[0]).length == 7) && data[0].hasOwnProperty(this.label.cabeceraExcelNombre) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
          data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede))
      default:
        return false;
    }
  }

  validarCabeceraExcelUpdate(data: any, tipoProducto: string): boolean {
    switch (tipoProducto.toLowerCase()) {
      case 'montura':
        return ((Object.keys(data[0]).length == 13) && data[0].hasOwnProperty(this.label.cabeceraExcelCodMontura) && data[0].hasOwnProperty(this.label.cabeceraExcelIdMont) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial)
          && data[0].hasOwnProperty(this.label.cabeceraExcelMarca) && data[0].hasOwnProperty(this.label.cabeceraExcelCodigo) &&
          data[0].hasOwnProperty(this.label.cabeceraExcelTalla) && data[0].hasOwnProperty(this.label.cabeceraExcelColor) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad)
          && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) && data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso)
          && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede))
      case 'luna':
        return ((Object.keys(data[0]).length == 8) && data[0].hasOwnProperty(this.label.cabeceraExcelIdLun) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial)
          && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
          data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede))
      case 'accesorio':
        return ((Object.keys(data[0]).length == 8) && data[0].hasOwnProperty(this.label.cabeceraExcelIdAccesorio) && data[0].hasOwnProperty(this.label.cabeceraExcelNombre) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
          data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede))
      default:
        return false;
    }
  }

  validarIdSede(data: any, idSede: string): boolean {
    return data.every(elem => (elem[this.label.cabeceraExcelSede] === idSede))
  }

  validarTipo(data: any, tipo: string): boolean {

    switch (tipo) {
      case 'montura':
        return data.every(elem => (elem[this.label.cabeceraExcelTipo] === tipo))
      case 'luna':
        return data.every(elem => (elem[this.label.cabeceraExcelTipo] === tipo))
      case 'accesorio':
        return data.every(elem => (elem[this.label.cabeceraExcelTipo] === tipo))
      default:
        return false;
    }

  }

  validarCampoFecha(data: any): boolean {
    return data.every(elem => (elem[this.label.cabeceraExcelFIngreso].length == 10 && Date.parse(changeFormatDate(elem[this.label.cabeceraExcelFIngreso]))))
  }

  descargarPlantilla() {
    if (this.formExportarCrear.valid) {
      let productName = '';
      switch (this.fC(this.productoC).value) {
        case 1:
          productName = 'montura';
          break;
        case 2:
          productName = 'luna';
          break;
        case 3:
          productName = 'accesorio';
          break;
        default:
          break;
      }
      let idSede = this.fC(this.sedeC).value;
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      let data = [];
      switch (productName) {
        case 'montura':
          data[0] = {
            "PRECIO COMPRA": 0,
            "PRECIO VENTA": 0,
            "TALLA": 0,
            "CODIGO": 0,
            "CODIGO MONTURA": '--',
            "MARCA": 'MARCA',
            "CANTIDAD": 0,
            "COLOR": 'COLOR',
            "MATERIAL": 'MATERIAL',
            "TIPO": productName,
            "SEDE": idSede,
            "FECHA INGRESO": new Date(Date.now()).toLocaleDateString('en-GB')
          }
          break;
        case 'luna':
          data[0] = {
            "PRECIO COMPRA": 0,
            "PRECIO VENTA": 0,
            //"CODIGO INTERNO": lunas.codigo_interno,
            "CANTIDAD": 0,
            "MATERIAL": 'MATERIAL',
            "TIPO": productName,
            "SEDE": idSede,
            "FECHA INGRESO": new Date(Date.now()).toLocaleDateString('en-GB')
          }
          break;
        case 'accesorio':
          data[0] = {
            "NOMBRE": "NOMBRE",
            "PRECIO COMPRA": 0,
            "PRECIO VENTA": 0,
            //"CODIGO INTERNO": accesorios.codigo_interno,
            "CANTIDAD": 0,
            "TIPO": productName,
            "SEDE": idSede,
            "FECHA INGRESO": new Date(Date.now()).toLocaleDateString('en-GB')
          }

          break;
        default:
          break;
      }
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = {
        Sheets: {
          'hoja': worksheet
        },
        SheetNames: ['hoja']
      }

      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
      const nombreSede = this.listSedes.find(res => (res.id_sede == idSede));
      saveFile(blobData, productName + '_' + nombreSede.nombre_sede);
    } else {
      return;
    }
  }
}


