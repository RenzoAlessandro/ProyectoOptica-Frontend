import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SedeService } from 'src/app/services/sede.service';
import { SedesModel } from 'src/models/sedes';
import * as XLSX from 'xlsx';
import saveFile from 'save-as-file';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
import { MonturasModel } from 'src/models/monturas';
import { stringToDate } from 'src/utils/functions';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LunasModel } from 'src/models/lunas';
import { AccesorioModel } from 'src/models/accesorio';

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
  formImportar: FormGroup;
  sede: string = "campoSede";
  producto: string = "campoProducto";
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

  constructor(
    private sedeService: SedeService,
    private fb: FormBuilder,
    private productoService: ProductosService,
    private usuarioService: UsuarioService
  ) { }

  

  ngOnInit() {
    this.getListSedes();
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Actualización por Excel', active: true }];
    this.message = "<div class='mb-3'><i class=\"display-4 text-muted uil uil-cloud-upload\"></i></div>Suelte los archivos aquí o haga clic para cargar.";
  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res => {
      this.listSedes = res;
    });
  }

  crearFormulario() {
    this.formExportar = this.fb.group({
      sede: [null, [Validators.required]],
      producto: [null, [Validators.required]],
    });

    this.formImportar = this.fb.group({
      productos: [null, [Validators.required]],
    })
  }
  f(campo: string) {
    return this.formExportar.get(campo);
  }

  exportarProductos() {
    Sweetalert("loading", "Cargando...");
    if (this.formExportar.valid) {
      let productName = '';
      switch (this.f('producto').value) {
        case 1:
          productName = 'Monturas';
          break;
        case 2:
          productName = 'Lunas';
          break;
        case 3:
          productName = 'Accesorios';
          break;
        default:
          break;
      }
      this.productoService.getProductosbySede(this.f('sede').value, productName).subscribe(res => {
        Sweetalert("close",null);
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        if(res.length == 0) {
          Sweetalert("success","No existen productos");
        } else {
          let data = [];
          switch (productName) {
            case 'Monturas':
              data = res.map(monturas => {
                return {
                  "ID MONTURA" : monturas.id_montura,
                  "PRECIO COMPRA": monturas.precio_montura_c,
                  "PRECIO VENTA": monturas.precio_montura_v,
                  "TALLA": monturas.talla,
                  "CODIGO INTERNO": monturas.codigo_interno,
                  "CODIGO": monturas.codigo,
                  "MARCA": monturas.marca,
                  "CANTIDAD":monturas.cantidad,
                  "COLOR":monturas.color,
                  "MATERIAL":monturas.material,
                  "TIPO":monturas.tipo,
                  "SEDE":monturas.id_sede,
                }
              })
              break;
            case 'Lunas':
              data = res.map(lunas => {
                return {
                  "ID LUNA" : lunas.id_luna,
                  "PRECIO COMPRA": lunas.precio_luna_c,
                  "PRECIO VENTA": lunas.precio_luna_v,
                  "CODIGO INTERNO": lunas.codigo_interno,
                  "CANTIDAD":lunas.cantidad,
                  "MATERIAL":lunas.material,
                  "TIPO":lunas.tipo,
                  "SEDE":lunas.id_sede,
                }
              })
            break;
            case 'Accesorios':
              data = res.map(accesorios => {
                return {
                  "ID ACCESORIO" : accesorios.id_accesorio,
                  "NOMBRE ACCESORIO" : accesorios.nombre_accesorio,
                  "PRECIO COMPRA": accesorios.precio_accesorio_c,
                  "PRECIO VENTA": accesorios.precio_accesorio_v,
                  "CODIGO INTERNO": accesorios.codigo_interno,
                  "CANTIDAD":accesorios.cantidad,
                  "TIPO":accesorios.tipo,
                  "SEDE":accesorios.id_sede,
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
          const nombreSede = this.listSedes.find(res=> (res.id_sede==this.f('sede').value));
          console.log(nombreSede);
          saveFile(blobData, productName + '_'+nombreSede.nombre_sede);
        }
        
      })




    } else {

    }
  }


  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      this.errorImagen = "Solo un archivo";
      this.files = [];
      this.filebutton = false;
      console.log(this.filebutton)
      console.log(this.files[0].type);
    }
    else {
      this.errorImagen = "";
      this.filebutton = true;
    }
  }

  onRemove(event) {
    console.log(event);
    this.filebutton = false;
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadFile() {
    //Sweetalert("loading", "Cargando...");
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(this.files[0]);
    fileReader.onload = (event: any) => {
      console.log(event);
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });
      let data;
      workbook.SheetNames.forEach(sheet => {
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{raw: false});
      });
      console.log(data);

      switch ((data[0].TIPO).toLowerCase()) {
        case 'montura':
          if (data[0].hasOwnProperty('ID MONTURA')) {
            this.actualizarProducto(data,data[0].TIPO);
          } else {
            this.crearProducto(data,data[0].TIPO);
          }
          break;
        case 'luna':
          if (data[0].hasOwnProperty('ID LUNA')) {
            this.actualizarProducto(data,data[0].TIPO);
          } else {
            this.crearProducto(data,data[0].TIPO);
          }
          break;
        case 'accesorio':
          if (data[0].hasOwnProperty('ID ACCESORIO')) {
            this.actualizarProducto(data,data[0].TIPO);
          } else {
            this.crearProducto(data,data[0].TIPO);
          }
          break;
        default:
          break;
      }
    }
  }

  actualizarProducto(data: any, tipoProducto:string) {
    let producto : Array<any>;
    producto = this.objExceltoDBUpdate(data, tipoProducto);
    console.log(producto)
    this.productoService.updateProductsbyExcel(producto).subscribe(res=> {
      console.log("ACTUALIZADO");
    }) 
  }

  crearProducto(data: any, tipoProducto:string) {
    let producto : Array<any>;
    producto = this.objExceltoDBCreate(data, tipoProducto);
    console.log(producto)
    this.productoService.createProductsbyExcel(producto).subscribe(res=> {
      console.log("subido");
    }) 
  }

  objExceltoDBCreate(data:any, tipo: string): Array<any> {
    let listMontura :Array<MonturasModel>;
    let listLuna: Array<LunasModel>;
    let listAccesorio: Array<AccesorioModel>;
    switch (tipo.toLowerCase()) {
      case 'montura':
        listMontura = data.map(element => {
          return {
            num_orden: Number(element.ORDEN),
            material : element.MATERIAL,
            marca: element.MARCA,
            codigo: element.CODIGO,
            talla: element.TALLA,
            color: element.COLOR,
            precio_montura_c: isNaN(Number(element['PRECIO COMPRA'])) ? 0: Number(element['PRECIO COMPRA']) ,
            precio_montura_v: isNaN(Number(element['PRECIO VENTA'])) ? 0: Number(element['PRECIO VENTA']),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            id_sede: this.usuarioService.getSedebyUser(),
            habilitado: true,
            fecha_creacion_monturas: stringToDate(element['FECHA CREACION']),
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
              num_orden: Number(element.ORDEN),
              material : element.MATERIAL,
              precio_luna_c: isNaN(Number(element['PRECIO COMPRA'])) ? 0: Number(element['PRECIO COMPRA']) ,
              precio_luna_v: isNaN(Number(element['PRECIO VENTA'])) ? 0: Number(element['PRECIO VENTA']),
              cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
              id_sede: this.usuarioService.getSedebyUser(),
              habilitado: true,
              fecha_creacion_luna: stringToDate(element['FECHA CREACION']),
              fecha_modificacion_luna: new Date(Date.now()),
            }
          })
          listMontura.forEach(element => {
            element.tipo = tipo.toLowerCase()
          });
          return listLuna;
        case 'accesorio':
          listAccesorio = data.map(element => {
            return {
              num_orden: Number(element.ORDEN),
              nombre_accesorio: element['NOMBRE ACCESORIO'],
              precio_accesorio_c: isNaN(Number(element['PRECIO COMPRA'])) ? 0: Number(element['PRECIO COMPRA']) ,
              precio_accesorio_v: isNaN(Number(element['PRECIO VENTA'])) ? 0: Number(element['PRECIO VENTA']),
              fecha_creacion_accesorio: stringToDate(element['FECHA CREACION']),
              fecha_modificacion_accesorio: new Date(Date.now()),
              cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
              id_sede: this.usuarioService.getSedebyUser(),
              habilitado: true,
            }
          })
          listMontura.forEach(element => {
            element.tipo = tipo.toLowerCase()
          });
          return listAccesorio;
      default:
        break;
    }
  }

  objExceltoDBUpdate(data:any, tipo: string): Array<any> {
    let listMontura :Array<MonturasModel>;
    let listLuna: Array<LunasModel>;
    let listAccesorio: Array<AccesorioModel>;
    switch (tipo.toLowerCase()) {
      case 'montura':
        listMontura = data.map(element => {
          return {
            id_montura: element['ID MONTURA'],
            precio_montura_c: isNaN(Number(element['PRECIO COMPRA'])) ? 0: Number(element['PRECIO COMPRA']) ,
            precio_montura_v: isNaN(Number(element['PRECIO VENTA'])) ? 0: Number(element['PRECIO VENTA']),
            cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
            fecha_modificacion_monturas: new Date(Date.now()),
            tipo: element.TIPO,
            id_sede: element.SEDE,
          }
        })
        return listMontura
        case 'luna':
          listLuna = data.map(element => {
            return {
              id_luna: element['ID LUNA'],
              precio_luna_c: isNaN(Number(element['PRECIO COMPRA'])) ? 0: Number(element['PRECIO COMPRA']) ,
              precio_luna_v: isNaN(Number(element['PRECIO VENTA'])) ? 0: Number(element['PRECIO VENTA']),
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
              precio_accesorio_c: isNaN(Number(element['PRECIO COMPRA'])) ? 0: Number(element['PRECIO COMPRA']) ,
              precio_accesorio_v: isNaN(Number(element['PRECIO VENTA'])) ? 0: Number(element['PRECIO VENTA']),
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
}


