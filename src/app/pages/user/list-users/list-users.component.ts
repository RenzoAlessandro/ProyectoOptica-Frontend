import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';

import {DecimalPipe, formatDate} from '@angular/common';
import {Observable} from 'rxjs';

import {CustomerService} from './list-users.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersModel } from 'src/models/user';
import { SedesModel } from 'src/models/sedes';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class ListUsersComponent implements OnInit {

    mostrarSpinner = false;

    // modal
    editEvent: any;
    formUser: FormGroup;
    submitted = false;

    nombres: string = "campoNombres";
    apellidos: string = "campoApellidos";
    dni: string = "campoDNI";
    rol: string = "campoRol";
    sede: string = "campoSede";
    telefono: string = "campoTelefono";
    fechaNacimiento: string = "campoFechaNacimiento";
    fechaModificacion: string = "campoFechaModificacion";
    email: string = "campoEmail";
    observaciones: string = "campoObservaciones";
    // bread crumb items
    breadCrumbItems: Array<{}>;
    term: any;
  
    customers$: Observable<UsersModel[]>;
    total$: Observable<number>;

    lettersPattern = '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'; // Incluimos Ññ y tildes en cada vocal
    numberPattern = '^[0-9]+$|^\S*$';
    passwordPattern = '/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/';
  
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
    listRoles = [
      { cNombre:1, tNombre: "Admin" },
      { cNombre:2, tNombre: "Vendedor" },
      { cNombre:3, tNombre: "Contador" }
    ];
    user= new UsersModel;
    fecha_actual: Date;
    listSedes: Array<SedesModel>;
  fecha_nac: Date;
  
  constructor(
    public service: CustomerService,
    private usuarioService: UsuarioService,
    private modalService: NgbModal, 
    private fb: FormBuilder,
    ) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
    service.mostrar.subscribe(res=>{
      this.mostrarSpinner = res;
    })
    console.log(this.mostrarSpinner)
  }

  ngOnInit() {
    this.crearFormulario();
    this.getSedes();
    this.breadCrumbItems = [{ label: 'Usuarios' }, { label: 'Lista de Usuarios', active: true }];
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  f(campo:any) {
    return this.formUser.get(campo);
  }
  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
   centerModal(centerDataModal: any, data: UsersModel) {
    this.fecha_nac = data.fecha_nacimiento;
    this.fecha_actual = new Date(Date.now());
    this.f(this.dni).setValue(data.dni);
    this.f(this.fechaModificacion).setValue(formatDate(this.fecha_actual,'yyyy-MM-dd','en'));
    this.f(this.nombres).setValue(data.nombres);
    this.f(this.apellidos).setValue(data.apellidos);
    this.f(this.fechaNacimiento).setValue(formatDate(data.fecha_nacimiento,'yyyy-MM-dd','en','GMT-0500'));
    this.f(this.telefono).setValue(data.telefono);
    this.f(this.email).setValue(data.email);
    this.f('rol').setValue(data.rol);
    this.f('sede').setValue(data.id_sede);
    this.f(this.observaciones).setValue(data.observaciones);
    this.user.id_usuario = data.id_usuario;
    this.modalService.open(centerDataModal, { centered: true, size: 'lg', windowClass:'modal-holder' });
  }
  
    /**
 * Delete event
 */
deleteEventData() {
  this.editEvent.remove();
  this.modalService.dismissAll();
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
    /* if (this.formData.valid) {

    }
    this.submitted = true;*/
  } 

  crearFormulario(){
    this.formUser = this.fb.group({
      [this.nombres]:[null,[
        Validators.required,
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      [this.apellidos]:[null,[
        Validators.required,
        Validators.pattern(this.lettersPattern),
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],

      [this.dni]:[{value: null, disabled: true}],

      rol:[],
      [this.email]:[null,[
        Validators.email
      ]],
      [this.observaciones]:[null,[
      ]],
      [this.telefono]:[null,[
        Validators.pattern(this.numberPattern),
        Validators.min(111111111),
        Validators.max(999999999)
      ]],
      [this.fechaNacimiento]:[null,[
        //Validators.required
      ]],
      [this.fechaModificacion]:[{value:null,disabled:true},[
        //Validators.required
      ]],
      sede:[],
    },)
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  getSedes() {
    this.usuarioService.getSedes().subscribe(res =>{
      this.listSedes = res;
    })
  }

  eliminar(data: UsersModel) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar al Usuario?',
      text: 'No se podrá revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Sweetalert("loading", "Cargando...");
        this.usuarioService.darBajaUser(data.id_usuario).subscribe(res => {
          Sweetalert("close", null);
          Sweetalert("success", "Usuario eliminado");
          console.log("Usuario borrado");
          this.updateListUsers();
        }, error => {
          Sweetalert("close", null);
          Sweetalert("error", "Error en la conexión");
        },
        );
      }
      else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Usuario no eliminado',
          'error'
        );
      }
    }
    );
  }

  updateUser() {
    if (this.formUser.valid) {
      this.user.fecha_modificacion = new Date(Date.now());
      this.user.nombres = this.f(this.nombres).value;
      this.user.apellidos = this.f(this.apellidos).value;
      const fch_nac = new Date((this.f(this.fechaNacimiento).value+'T00:00'));
      this.user.fecha_nacimiento = fch_nac;
      this.user.telefono = this.f(this.telefono).value;
      this.user.email = this.f(this.email).value;
      this.user.rol = this.f('rol').value;
      this.user.id_sede = this.f('sede').value;
      this.user.observaciones = this.f(this.observaciones).value;
      console.log(this.user);

      this.usuarioService.updateUsers(this.user.id_usuario,this.user).subscribe(res=>{
        console.log('actualizado');
        this.modalService.dismissAll();
        this.formUser.reset;
        this.updateListUsers();
      }); 
    } else {
      
    }
  }

  updateListUsers() {
    this.usuarioService.getUsers().subscribe( res=>{
      this.service.updateTable(res);
    })
  }

  /**
   * Returns form Editar Usuarios
   */
    get formEU() {
      return this.formUser.controls;
  }
}
