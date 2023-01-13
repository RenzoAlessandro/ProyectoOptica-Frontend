import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SedeService } from 'src/app/services/sede.service';
import { SedesModel } from 'src/models/sedes';
import * as XLSX from 'xlsx';
import saveFile from 'save-as-file';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';
import { MonturasModel } from 'src/models/monturas';

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

  constructor(
    private sedeService: SedeService,
    private fb: FormBuilder,
    private productoService: ProductosService
  ) { }

  message: string

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
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        let data = res.map(productos => {
          return {
            "ID MONTURA" : productos.id_montura,
            "PRECIO COMPRA": productos.precio_montura_c,
            "PRECIO VENTA": productos.precio_montura_v,
            "TALLA": productos.talla,
            "CODIGO INTERNO": productos.codigo_interno,
            "CODIGO": productos.codigo,
            "MARCA": productos.marca,
            "CANTIDAD":productos.cantidad,
            "COLOR":productos.color,
            "MATERIAL":productos.material,
            "TIPO":productos.tipo
          }
        })
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = {
          Sheets: {
            'hoja': worksheet
          },
          SheetNames: ['hoja']
        }

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
        saveFile(blobData, productName);
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
      console.log(this.files[0].type);
    }
    else {
      this.errorImagen = "";
    }
  }

  onRemove(event) {
    console.log(event);
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
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
      });
      //console.log(data);

      switch ((data[0].tipo).toLowerCase()) {
        case 'montura':
          if (data[0].hasOwnProperty('id_montura')) {
            this.actualizarProducto();
          } else {
            this.crearProducto(data,data[0].tipo);
            //console.log(this.objExceltodatabase(data,data[0].tipo));
          }
          break;
        case 'luna':
          if (data[0].hasOwnProperty('id_montura')) {
            this.actualizarProducto();
          } else {
            //this.crearProducto();
          }
          break;
        case 'accesorio':
          if (data[0].hasOwnProperty('id_montura')) {
            this.actualizarProducto();
          } else {
            //this.crearProducto();
          }
          break;
        default:
          break;
      }

      /* this.productoService.updateProductsbyExcel(data).subscribe(res =>{
        console.log("subido");
        Sweetalert("close",null);
        Sweetalert("success","Producto actualizado");
      }, error => {
        Sweetalert("close", null);
        Sweetalert("error", "Error en al actualizar");
      },
      ) */
    }
  }

  actualizarProducto() {

  }

  crearProducto(data: any, tipoProducto) {
    let producto : Array<any>;
    producto = this.objExceltodatabase(data, tipoProducto);
    console.log(producto)
    this.productoService.createProductsbyExcel(producto).subscribe(res=> {
      console.log("subido");
    })
  }

  objExceltodatabase(data:any, tipo: string): Array<MonturasModel> {
    let listMontura :Array<MonturasModel>;
    let array = ['MATERIAL','MARCA','CODIGO','TALLA','COLOR','precio compra','precio venta']
    switch (tipo.toLowerCase()) {
      case 'montura':
        listMontura = data.map(element => {
          return {
            material : element.MATERIAL,
            marca: element.MARCA,
            codigo: element.CODIGO,
            talla: element.TALLA,
            color: element.COLOR,
            precio_montura_c: isNaN(Number(element['precio compra'])) ? 0: Number(element['precio compra']) ,
            precio_montura_v: isNaN(Number(element['precio venta'])) ? 0: Number(element['precio venta']),
            tipo: element.tipo,
            cantidad: isNaN(Number(element.cantidad)) ? 0 : Number(element.cantidad),
            id_sede: '0477d92b-ea04-4225-8cbc-c77bdc13fe39Sed004',
            habilitado: true,
            fecha_creacion_monturas: new Date(Date.now()),
            fecha_modificacion_monturas: new Date(Date.now()),
          }
        })
        listMontura.forEach(element => {
          element.tipo = 'montura'
        });
        return listMontura
        case 'luna':
        
        break;
        case 'accesorio':
        
        break;
      default:
        break;
    }
  }
}


