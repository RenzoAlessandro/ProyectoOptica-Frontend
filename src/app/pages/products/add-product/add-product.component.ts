import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  formMonturas: FormGroup;
  submitted = false;
  material: string = "campoMaterial";
  marca: string = "campoMarca";
  talla: string = "campoTalla";
  codigo: string = "campoCodigo";
  codigo_interno: string = "campoInterno";
  cantidad: string = "campoCantidad";
  precio_compra: string = "campoCompra";
  precio_venta: string = "campoVenta";
  fecha_registro: string = "campoFechaRegistro";
  fecha_modificacion: string = "campoFechaModificacion";

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formMonturas = this.fb.group({
      [this.material]:[],
      [this.marca]:[],
      [this.talla]:[],
      [this.codigo]:[],
      [this.codigo_interno]:[],
      [this.cantidad]:[],
      [this.precio_compra]:[],
      [this.precio_venta]:[],
      [this.fecha_registro]:[],
      [this.fecha_modificacion]:[],
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
