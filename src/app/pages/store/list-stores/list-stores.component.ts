import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SedesModel } from 'src/models/sedes';
import { Sweetalert } from 'src/utils/sweetalert';
import { StoresService } from './list-stores.service';
import { DecimalPipe } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss'],
  providers: [StoresService, DecimalPipe]
})

export class ListStoresComponent implements OnInit {

  //formulario monturas
  submitted = false;
  formEditarTiendas: FormGroup;
  nombre_tienda: string = "campoNombreTienda";
  direccion_tienda: string = "campoDireccionTienda";
  telefono_tienda: string = "campoTelefonoTienda";
  ruc_tienda: string = "campoRucTienda";
  color_tienda: string = "campoColorTienda";

  numberPattern = '^[0-9]+$|^\S*$';
  
  mostrar = false;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  files: File[] = [];
  listSedes = [];
  sede = new SedesModel;

  searchSedes = [];
  editLogoSede = '';
  editlogoDOWNLOAD: string;

  constructor(
    public service: StoresService,
    private modalService: NgbModal,
    private sedeService: SedeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tiendas' }, { label: 'Lista de Tiendas', active: true }];
    this.getListSedes();
  }

  searchFilter(e) {
    const searchStr = e.target.value;
    this.searchSedes = this.listSedes.filter((sede) => {
      return sede.nombre_sede.toLowerCase().search(searchStr.toLowerCase()) !== -1;
    });

  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res => {
      this.listSedes = res;
      this.searchSedes = Object.assign([], this.listSedes);
      this.mostrar = true;
    })
  }

  crearFormulario() {
    this.formEditarTiendas = this.fb.group({
      [this.nombre_tienda]: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.direccion_tienda]: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]],
      [this.telefono_tienda]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.minLength(6),
        Validators.maxLength(9)
      ]],
      [this.ruc_tienda]: [null, [
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.minLength(8),
        Validators.maxLength(11)
      ]],
      [this.color_tienda]: []
    })
  }

  get formET() {
    return this.formEditarTiendas.controls;
  }

  /**
   * Open center modal
   * @param DataModalEditStore center modal data
   */
  OpenModalEditStore(DataModalEditStore: any, data: SedesModel) {
    this.crearFormulario();
    this.f(this.nombre_tienda).setValue(data.nombre_sede);
    this.f(this.direccion_tienda).setValue(data.direccion);
    this.f(this.ruc_tienda).setValue(data.ruc);
    this.f(this.telefono_tienda).setValue(data.telefono);
    this.sede.id_sede = data.id_sede;
    this.editLogoSede = data.logoURL;
    this.editlogoDOWNLOAD = data.logoDOWNLOAD;
    this.modalService.open(DataModalEditStore, { centered: true, windowClass: 'modal-holder' });
  }

  /**
   * Close event modal
   */
  closeEventModal() {

    this.modalService.dismissAll();
  }
  /**
   * Save the event
   */
  saveEvent() {
    if (this.formEditarTiendas.valid) {

    }
    this.submitted = true;
  }

  /**
   * Funcion de ayuda para obtener los valores del formulario
   * @param campo 
   * @returns 
   */
  f(campo: any) {
    return this.formEditarTiendas.get(campo);
  }

  guardarTienda() {
    if (this.formEditarTiendas.valid) {

      this.sede.direccion = this.f(this.direccion_tienda).value;
      this.sede.nombre_sede = this.f(this.nombre_tienda).value;
      this.sede.fecha_modificacion_sede = new Date(Date.now());
      this.sede.ruc = this.f(this.ruc_tienda).value;
      this.sede.telefono = this.f(this.telefono_tienda).value;
      this.sede.color = '';
      Sweetalert("loading", "Cargando...");
      let formData = new FormData();

      if (this.files.length != 0) {
        formData.append('photo', this.files[0], this.files[0].name);
        this.sedeService.saveImageBackend(formData).subscribe(res => {
          this.sede.logoURL = res.logoURL;
          this.sede.logoDOWNLOAD = res.logoDOWNLOAD;
          console.log(this.sede)
          this.sedeService.editSede(this.sede).subscribe(res => {
            this.files = [];
            this.modalService.dismissAll();
            Sweetalert("close", null);
            Sweetalert("success", "Tienda actualizada");
            this.formEditarTiendas.reset();
          });
        })
      } else {
        this.sede.logoURL = this.editLogoSede;
        this.sede.logoDOWNLOAD = this.editlogoDOWNLOAD;
        console.log(this.sede)
        this.sedeService.editSede(this.sede).subscribe(res => {
          this.files = [];
          this.modalService.dismissAll();
          Sweetalert("close", null);
          Sweetalert("success", "Tienda actualizada");
          this.formEditarTiendas.reset();
          this.getListSedes();
        });
      }
    } else {
      return;
    }
  }

  updateListStores() {
    this.sedeService.getSedes().subscribe(res => {
      this.service.updateTable(res);
    })
  }

  /** funciones del dropzone img */
  onSelect(event) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      //this.errorImagen = "Solo una Imagen";
      this.files = [];
      //console.log(this.files[0].type);
    }
    else {
      //this.errorImagen = "";
    }
  }
  onRemove(event) {
    //this.filebutton = false;
    this.files.splice(this.files.indexOf(event), 1);
  }

  elimninarVenta(data) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-danger ms-2',
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Está seguro de eliminar la sede?',
        html: '¡No se podrá revertir esto! <br> Se eliminará los productos (accesorios, monturas, lunas), ventas, usuarios, caja' ,
        icon: 'warning',
        cancelButtonText: 'No, cancelar!',
        confirmButtonText: 'Si, Eliminar!',
        showCancelButton: true,
      })
      .then(result => {
        if (result.value) {
          console.log(data)
          //Sweetalert("loading", "Cargando...");
          /* this.productosService.createVenta(this.venta).subscribe(res => {
            this.createPDF(this.venta, this.customer);
            Sweetalert("close", null);
            Sweetalert("success", "Venta realizada");
            this.modalService.dismissAll();
            this.products = [];
            this.getListMonturas(this.idSede);
            this.estadoBotonGuardar();
          } ,
            (error) => {
              Sweetalert("close", null);
              if (error.status !== 404) {

                Sweetalert("error", "Error en la conexión");
              }
            });*/
        } else if (

          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          //this.venta.tipo_venta = [];
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'La eliminación no se ha realizado',
            'error'
          );

        }
      });
  }
}
