import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import * as XLSX from 'xlsx';
import saveFile from 'save-as-file';
import { VentaService } from 'src/app/services/venta.service';
import { VentasModel } from 'src/models/venta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleted-sales',
  templateUrl: './deleted-sales.component.html',
  styleUrls: ['./deleted-sales.component.scss']
})
export class DeletedSalesComponent implements OnInit {

  role = 'Admin'
  formSedes: FormGroup;
  listSedes: Array<SedesModel>;
  nombre_sedes: string = "campoSede";
  idSede:string = "";

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ventaService: VentaService
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ventas' }, { label: 'Ventas Eliminas', active: true }];
    this.getListSedes();
    this.crearFormulario()
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }
  
  crearFormulario() {
    this.formSedes = this.fb.group({
      [this.nombre_sedes]: [this.idSede,[Validators.required]]
    })
  }

  fS(campo: string) {
    return this.formSedes.get(campo);
  }
  exportarVentasEliminadas() {
    if (this.formSedes.valid) {
      let data = [];
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      this.ventaService.getVentasEliminadasbySede(this.fS(this.nombre_sedes).value).subscribe(res=>{
        if(res.length > 0){
          data = res.map((ventas:VentasModel) => {
            return {
              "FECHA": new Date(ventas.fecha_creacion_venta).toLocaleDateString('en-GB') ,
              "NOMBRE CLIENTE": ventas.nombre_cliente,
              "TOTAL": ventas.tipo_venta[0].precio_total,
              "VENDEDOR": ventas.nombre_vendedor,
              "FORMA DE PAGO": ventas.tipo_venta[0].forma_pago,
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
              saveFile(blobData, 'ventas_eliminadas' + '_' + nombreSede.nombre_sede);
        }
        else {
          this.mostrarMensaje();
        }
       
      })
      
    } else {
      return;
    }
  }
  mostrarMensaje() {
    Swal.fire({
      title: 'Búsqueda finalizada',
      text: 'No existen ventas elimindas',
      icon: 'error',
      confirmButtonColor: '#34c38f',
    })
  }
}
