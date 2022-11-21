import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent implements OnInit {

  selectValue = [];
  selectedValue = '';
  stateValue = [];

  submitted = false;

  formTiendas: FormGroup;
  nombre_tienda: string = "campoNombreTienda";
  direccion_tienda: string = "campoDireccionTienda";
  estado_tienda: string = "campoEstadoTienda";

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();

    this.selectValue = ['Disponible', 'Cerrado', 'Pendiente'];
  }

  crearFormulario() {
    this.formTiendas = this.fb.group({
      [this.nombre_tienda]:[],
      [this.direccion_tienda]:[],
      [this.estado_tienda]:[],
    })
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (this.formTiendas.valid) {

    }
    this.submitted = true;
  }

}
