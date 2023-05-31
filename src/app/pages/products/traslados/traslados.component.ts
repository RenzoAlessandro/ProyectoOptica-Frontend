import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Sweetalert } from 'src/utils/sweetalert';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SedesModel } from 'src/models/sedes';
import { MonturasModel } from 'src/models/monturas';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductosService } from 'src/app/services/productos.service';
import { AccesorioModel } from 'src/models/accesorio';
import { LunasModel } from 'src/models/lunas';

@Component({
  selector: 'app-traslados',
  templateUrl: './traslados.component.html',
  styleUrls: ['./traslados.component.scss']
})
export class TrasladosComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  formInventario: FormGroup;
  formSede: FormGroup;
  mostrarSpinner = false;
  listSedes: Array<SedesModel> = [];
  monturas$: Observable<MonturasModel[]>;
  listMonturas: Array<MonturasModel>;
  products: any = [];
  listProducts: Array<MonturasModel> | Array<AccesorioModel> | Array<LunasModel>;
  nombre_sedes: string = "campoSede";
  nombre_sedeDestino: string = "campoSedeDestino";
  idSede = '';
  idSedeDestino = '';
  keyword = "id_producto";
  producto: string = "campoProducto";
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
    private productosService: ProductosService,
  ) { }

  ngOnInit(): void {
    //Sweetalert("loading", "Cargando...");
    this.getListSedes();

    this.crearFormulario();
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Traslado de Productos', active: true }];
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }

  crearFormulario() {
    this.formInventario = this.fb.group({
      [this.nombre_sedes]: [this.idSede, [Validators.required]],
      [this.producto]: [null, [Validators.required]],
    });
    this.formSede = this.fb.group({
      [this.nombre_sedeDestino]: [null, [Validators.required]],
    })

  }

  /* getListMonturas(idSede: string) {
    this.productosService.getMonturasforSale(idSede).subscribe(res => {
      Sweetalert("close", null);
      this.listMonturas = res;
    })
  } */

  fS(campo: string) {
    return this.formInventario.get(campo);
  }

  fD(campo: string) {
    return this.formSede.get(campo);
  }

  changeSede() {
    this.products = [];
    this.idSede = this.fS(this.nombre_sedes).value;
    let tipoProducto = this.fS(this.producto).value;
    if (this.idSede == null || tipoProducto == null) {
      return
    } else {
      Sweetalert("loading", "Cargando...");
      this.updateListProducts(this.idSede, tipoProducto);
    }

  }

  updateListProducts(idSede: string, tipoProducto: number) {
    switch (tipoProducto) {
      case 1:
        this.productosService.getMonturasforSale(idSede).subscribe(res => {
          Sweetalert("close", null);
          this.listProducts = res;
          this.mostrarSpinner = true;
        })
        break;
      case 2:

        break;
      case 3:

        break;

      default:
        break;
    }



  }



  selectEvent(item: MonturasModel) {
    const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);
    if (!productExistInCart) {
      switch (item.tipo) {
        case 'montura':
          this.products.push({ ...item });
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

  trasladoSedes() {
    if (this.formSede.valid) {
      let idSedeDestino = this.fD(this.nombre_sedeDestino).value;
      let nombreUsuario = this.usuarioService.getUser().nombres + ' ' + this.usuarioService.getUser().apellidos;
      this.products.forEach(element => {
        if (!element.hasOwnProperty('traslado')) {
          const propiedad = {
            traslado: []
          }
          Object.assign(element, propiedad);
        } 
      });
      console.log(nombreUsuario, idSedeDestino, this.products)
      this.productosService.updateSedeofListProducts(nombreUsuario,idSedeDestino,this.products).subscribe(res => {
        console.log("guardado..")
      });
    } else {
      return
    }
  }

}
