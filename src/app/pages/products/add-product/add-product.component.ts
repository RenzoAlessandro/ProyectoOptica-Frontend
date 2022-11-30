import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { AccesorioModel } from 'src/models/accesorio';
import { LunasModel } from 'src/models/lunas';
import { MonturasModel } from 'src/models/monturas';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  submitted = false;

  formMonturas: FormGroup;
  material_montura: string = "campoMaterialMontura";
  marca_montura: string = "campoMarcaMontura";
  talla_montura: string = "campoTallaMontura";
  codigo_montura: string = "campoCodigoMontura";
  codigo_interno_montura: string = "campoInternoMontura";
  cantidad_montura: string = "campoCantidadMontura";
  precio_compra_montura: string = "campoCompraMontura";
  precio_venta_montura: string = "campoVentaMontura";
  fecha_registro_montura: string = "campoFechaRegistroMontura";
  fecha_modificacion_montura: string = "campoFechaModificacionMontura";

  formLunas: FormGroup;
  material_luna: string = "campoMaterialLuna";
  cantidad_luna: string = "campoCantidadLuna";
  precio_compra_luna: string = "campoCompraLuna";
  precio_venta_luna: string = "campoVentaLuna";
  fecha_registro_luna: string = "campoFechaRegistroLuna";
  fecha_modificacion_luna: string = "campoFechaModificacionLuna";

  formAccesorios: FormGroup;
  nombre_accesorio: string = "campoNombreAccesorio";
  cantidad_accesorio: string = "campoCantidadAccesorio";
  precio_compra_accesorio: string = "campoCompraAccesorio";
  precio_venta_accesorio: string = "campoVentaAccesorio";
  fecha_registro_accesorio: string = "campoFechaRegistroAccesorio";
  fecha_modificacion_accesorio: string = "campoFechaModificacionAccesorio";

  lunas = new LunasModel;
  monturas = new MonturasModel;
  accesorios = new AccesorioModel;


  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formMonturas = this.fb.group({
      [this.material_montura]:[],
      [this.marca_montura]:[],
      [this.talla_montura]:[],
      [this.codigo_montura]:[],
      [this.codigo_interno_montura]:[],
      [this.cantidad_montura]:[],
      [this.precio_compra_montura]:[],
      [this.precio_venta_montura]:[],
      [this.fecha_registro_montura]:[],
      [this.fecha_modificacion_montura]:[],
    })

    this.formLunas = this.fb.group({
      [this.material_luna]:[],
      [this.cantidad_luna]:[],
      [this.precio_compra_luna]:[],
      [this.precio_venta_luna]:[],
      [this.fecha_registro_luna]:[],
      [this.fecha_modificacion_luna]:[],
    })

    this.formAccesorios = this.fb.group({
      [this.nombre_accesorio]:[],
      [this.cantidad_accesorio]:[],
      [this.precio_compra_accesorio]:[],
      [this.precio_venta_accesorio]:[],
      [this.fecha_registro_accesorio]:[],
      [this.fecha_modificacion_accesorio]:[],
    })
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formMonturas.valid) {

    }
    this.submitted = true;
  }

  fA(campo:any){
    return this.formAccesorios.get(campo);
  }

  fL(campo:any){
    return this.formLunas.get(campo);
  }

  fM(campo:any){
    return this.formMonturas.get(campo);
  }

  guardarAccesorios() {
    if (this.formAccesorios.valid) {
      this.accesorios.nombre_accesorio = this.fA(this.nombre_accesorio).value;
      this.accesorios.cantidad = Number(this.fA(this.cantidad_accesorio).value);
      this.accesorios.fecha_creacion_accesorio = new Date();
      this.accesorios.precio_accesorio_v = Number(this.fA(this.precio_venta_accesorio).value);
      this.accesorios.precio_accesorio_c = Number(this.fA(this.precio_compra_accesorio).value);
      this.accesorios.fecha_modificacion_accesorio = new Date();
      this.accesorios.id_sede = "por confirmar";
      this.accesorios.habilitado = true;
      this.accesorios.tipo = "accesorio";
      console.log(this.accesorios);
      this.productosService.createAccesorios(this.accesorios).subscribe(res=>{
        console.log("accesorio guardado")
      })
    } else {
      
    }
  }

  guardarLunas() {
    if (this.formLunas.valid) {
      this.lunas.material = this.fL(this.material_luna).value;
      this.lunas.precio_luna_c = Number(this.fL(this.precio_compra_luna).value);
      this.lunas.precio_luna_v = Number(this.fL(this.precio_venta_luna).value);
      this.lunas.fecha_creacion_luna = new Date();
      this.lunas.fecha_modificacion_luna = new Date()
      this.lunas.cantidad = Number(this.fL(this.cantidad_luna).value);
      this.lunas.id_sede = "por confirmar";
      this.lunas.habilitado = true;
      this.lunas.tipo = "luna";
      console.log(this.lunas);
      this.productosService.createLunas(this.lunas).subscribe(res=>{
        console.log("lunas guardado")
      })
    } else {
      
    }
  }

  guardarMonturas() {
    if (this.formMonturas.valid) {
      this.monturas.material = this.fM(this.material_montura).value;
      this.monturas.marca = this.fM(this.marca_montura).value;
      this.monturas.talla = this.fM(this.talla_montura).value;
      this.monturas.codigo_interno = this.fM(this.codigo_interno_montura).value;
      this.monturas.codigo = this.fM(this.codigo_montura).value;
      this.monturas.precio_montura_c = Number(this.fM(this.precio_compra_montura).value);
      this.monturas.precio_montura_v = Number(this.fM(this.precio_venta_montura).value);
      this.monturas.fecha_creacion_monturas = new Date();
      this.monturas.fecha_modificacion_monturas = new Date()
      this.monturas.cantidad = Number(this.fM(this.cantidad_montura).value);
      this.monturas.id_sede = "por confirmar";
      this.monturas.habilitado = true;
      this.monturas.tipo = "montura";
      console.log(this.monturas);
      this.productosService.createMonturas(this.monturas).subscribe(res=>{
        console.log("monturas guardado")
      })
    } else {
      
    }
  }
}
