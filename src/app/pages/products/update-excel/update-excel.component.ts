import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SedeService } from 'src/app/services/sede.service';
import { SedesModel } from 'src/models/sedes';
import * as XLSX from 'xlsx';
import saveFile from 'save-as-file';
import { ProductosService } from 'src/app/services/productos.service';
import { Sweetalert } from 'src/utils/sweetalert';

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

        const worksheet = XLSX.utils.json_to_sheet(res);
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
    Sweetalert("loading", "Cargando...");
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
        console.log(data);


        this.productoService.updateProductsbyExcel(data).subscribe(res =>{
          console.log("subido");
          Sweetalert("close",null);
          Sweetalert("success","Producto actualizado");
        }, error => {
          Sweetalert("close", null);
          Sweetalert("error", "Error en al actualizar");
        },
        )
      }
  }
}
