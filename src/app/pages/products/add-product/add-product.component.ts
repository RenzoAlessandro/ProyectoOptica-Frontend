import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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




  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder) { }

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

}
