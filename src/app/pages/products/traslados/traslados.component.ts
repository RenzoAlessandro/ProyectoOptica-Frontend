import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Sweetalert } from 'src/utils/sweetalert';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SedesModel } from 'src/models/sedes';
import { MonturasModel } from 'src/models/monturas';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-traslados',
  templateUrl: './traslados.component.html',
  styleUrls: ['./traslados.component.scss']
})
export class TrasladosComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  formInventario: FormGroup;
  mostrarSpinner = false;
  listSedes: Array<SedesModel> = [];
  monturas$: Observable<MonturasModel[]>;
  listMonturas: Array<MonturasModel>;
  products: any = [];
  nombre_sedes: string = "campoSede";
  idSede = '';
  keyword = "id_producto";
  @ViewChild('autocomplete') autocomplete;

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
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private monturasService: ProductosService,
  ) { }

  ngOnInit(): void {
    Sweetalert("loading", "Cargando...");
    this.getListSedes();
    this.getListMonturas();
    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Traslado de Productos', active: true }];
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }

  crearFormulario() {
    this.formInventario = this.fb.group({
      [this.nombre_sedes]: [this.idSede]
    })
  }

  getListMonturas() {
    this.monturasService.getProductosbySede(this.usuarioService.getSedebyUser(), 'montura').subscribe(res => {
      Sweetalert("close", null);
      this.listMonturas = res;
      const propiedad = {
        isSelected: false
      }
      this.listMonturas.forEach(elem => {
        Object.assign(elem, propiedad)
      })
      this.mostrarSpinner = true;

    })
  }

  fS(campo: string) {
    return this.formInventario.get(campo);
  }

  changeSede() {
    this.products = [];
    this.idSede = this.fS(this.nombre_sedes).value;
    Sweetalert("loading", "Cargando...");
    this.updateListMonturas(this.idSede);
  }

  updateListMonturas(idSede: string) {
    this.monturasService.getProductosbySede(idSede, 'montura').subscribe(res => {
      Sweetalert("close", null);
      this.listMonturas = res;
      const propiedad = {
        isSelected: false
      }
      this.listMonturas.forEach(elem => {
        Object.assign(elem, propiedad)
      })
      this.mostrarSpinner = true;
    })
  }


  selectEvent(item: MonturasModel) {
    const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);
    if (!productExistInCart) {
      switch (item.tipo) {
        case 'montura':
          this.products.push({ ...item, isSelected: true });
          this.autocomplete.clear();
          this.autocomplete.close();
          break;
        default:
          break;
      }

    } else {
      Sweetalert("error", "Este producto ya fue registrado");
      this.autocomplete.clear();
      this.autocomplete.close();
      return;
    }
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
    this.autocomplete.close();
  }


}
