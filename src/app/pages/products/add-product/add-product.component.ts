import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { AccesorioModel } from 'src/models/accesorio';
import { LunasModel } from 'src/models/lunas';
import { MonturasModel } from 'src/models/monturas';
import { Sweetalert } from '../../../../utils/sweetalert';

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
  color_montura: string = "campoColorMontura";
  codigo_montura: string = "campoCodigoMontura";
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
  fecha_actual: any;

  numberPattern = '[0-9]+';
  decimalPattern = /^\d+(\.\d{2})?$/;
  lettersPattern = '[a-zA-Z ]*';

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Añadir Productos', active: true }];

    this.crearFormulario();
  }

  crearFormulario() {
    this.fecha_actual = new Date(Date.now());
    this.formMonturas = this.fb.group({
      [this.material_montura]:[null, [
        Validators.required
      ]],
      [this.marca_montura]:[null,[
        Validators.required
      ]],
      [this.talla_montura]:[null,[
        Validators.required
      ]],
      [this.color_montura]:[null,[
        Validators.required,
        Validators.pattern(this.lettersPattern)
      ]],
      [this.codigo_montura]:[null, [
        Validators.required
      ]],
      [this.cantidad_montura]:[null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_montura]:[null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_montura]:[null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.fecha_registro_montura]:[{value:this.fecha_actual.toLocaleDateString(), disabled:true}],
      [this.fecha_modificacion_montura]:[],
    })

    this.formLunas = this.fb.group({
      [this.material_luna]:[null, [
        Validators.required
      ]],
      [this.cantidad_luna]:[null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_luna]:[null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_luna]:[null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.fecha_registro_luna]:[{value:this.fecha_actual.toLocaleDateString(), disabled:true}],
      [this.fecha_modificacion_luna]:[],
    })

    this.formAccesorios = this.fb.group({
      [this.nombre_accesorio]:[null, [Validators.required]],
      [this.cantidad_accesorio]:[null, [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]],
      [this.precio_compra_accesorio]:[null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.precio_venta_accesorio]:[null, [
        Validators.required,
        Validators.pattern(this.decimalPattern)
      ]],
      [this.fecha_registro_accesorio]:[{value:this.fecha_actual.toLocaleDateString(), disabled:true}],
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
      this.accesorios.fecha_creacion_accesorio = new Date(Date.now());
      this.accesorios.precio_accesorio_v = Number(this.fA(this.precio_venta_accesorio).value);
      this.accesorios.precio_accesorio_c = Number(this.fA(this.precio_compra_accesorio).value);
      this.accesorios.fecha_modificacion_accesorio = new Date(Date.now());
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
      this.lunas.fecha_creacion_luna = new Date(Date.now());
      this.lunas.fecha_modificacion_luna = new Date(Date.now())
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
      this.monturas.color = this.fM(this.color_montura).value;
      this.monturas.codigo = this.fM(this.codigo_montura).value;
      this.monturas.precio_montura_c = Number(this.fM(this.precio_compra_montura).value);
      this.monturas.precio_montura_v = Number(this.fM(this.precio_venta_montura).value);
      this.monturas.fecha_creacion_monturas = new Date(Date.now());
      this.monturas.fecha_modificacion_monturas = new Date(Date.now())
      this.monturas.cantidad = Number(this.fM(this.cantidad_montura).value);
      this.monturas.id_sede = "por confirmar";
      this.monturas.habilitado = true;
      this.monturas.tipo = "montura";
      console.log(this.monturas);
      Sweetalert("loading", "Cargando...");
      this.productosService.createMonturas(this.monturas).subscribe(res=>{
        Sweetalert("close",null);
        Sweetalert("success",null);
        this.formMonturas.reset();
        this.fM(this.fecha_registro_montura).setValue(this.fecha_actual.toLocaleDateString());
        //this.fecha_registro_montura.
        console.log("monturas guardado")
      })
    } else {
      
    }
  }


  /**
   * Returns form Monturas
   */
  get formM() {
    return this.formMonturas.controls;
  }
  /**
   * Returns form Lunas
   */
  get formL() {
    return this.formLunas.controls;
  }
  /**
   * Returns form Accesorios
   */
  get formA() {
    return this.formAccesorios.controls;
  }
}
