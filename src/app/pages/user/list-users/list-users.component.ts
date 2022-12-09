import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {CustomerService} from './list-users.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersModel } from 'src/models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class ListUsersComponent implements OnInit {
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
    password: string = "campoPassword";
    fechaNacimiento: string = "campoFechaNacimiento";
    repeatPassword: string = "campoRepeatPassword";
    fechaModificaion: string = "campoFechaModificacion";
    email: string = "campoEmail";
    observaciones: string = "campoObservaciones";
    // bread crumb items
    breadCrumbItems: Array<{}>;
    term: any;
  
    customers$: Observable<UsersModel[]>;
    total$: Observable<number>;

    lettersPattern = '[a-zA-Z ]*';
    numberPattern = '^[0-9]+$|^\S*$';
    passwordPattern = '/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/';
  
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
    listRoles = [
      { cNombre:1, tNombre: "Admin" },
      { cNombre:2, tNombre: "Vendedor" },
      { cNombre:3, tNombre: "Contador" }
    ];

  constructor(
    public service: CustomerService,
    private modalService: NgbModal, 
    private fb: FormBuilder
    ) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.crearFormulario();
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


  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
   centerModal(centerDataModal: any, data: UsersModel) {

    this.modalService.open(centerDataModal, { centered: true,windowClass:'modal-holder' });
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
      [this.dni]:[null,[
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.min(11111111),
        Validators.max(99999999)
      ]],
      rol:[],
      [this.email]:[null,[
        Validators.email
      ]],
      [this.observaciones]:[null,[
      ]],
      [this.telefono]:[null,[
        Validators.pattern(this.numberPattern)
      ]],
      [this.fechaNacimiento]:[null,[
        //Validators.required
      ]],
      [this.fechaModificaion]:[new Date(Date.now()).toLocaleDateString(),[
        //Validators.required
      ]],
      sede:[],
      [this.password]:[null,[
        Validators.required,
        //Validators.minLength(6),
        //Validators.minLength(20),
        //Validators.pattern(this.passwordPattern)
      ]],
      [this.repeatPassword]:[null,[
        Validators.required,
        //Validators.minLength(6),
        //Validators.minLength(20),
        //Validators.pattern(this.passwordPattern)
      ]]
    },
    {
        validator: this.ConfirmedValidator(this.password, this.repeatPassword),
    })
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
}
