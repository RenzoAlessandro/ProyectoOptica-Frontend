import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SedeService } from 'src/app/services/sede.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formCambioContrasenia: FormGroup;
  actualPassword: string = "campoActualPassword";
  password: string = "campoPassword";
  repeatPassword: string = "campoRepeatPassword";

  // bread crumb items
  breadCrumbItems: Array<{}>;
  usuario : UsersModel;
  sede: SedesModel;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private usuarioService: UsuarioService,
    private sedeService: SedeService
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUser();
    this.sede = this.sedeService.getListSedes().find((sede:SedesModel)=>(sede.id_sede == this.usuario.id_sede))
    this.breadCrumbItems = [{ label: 'Contacto Visual' }, { label: 'Perfil', active: true }];
    this.crearFormulario();
  }

  crearFormulario(){
    this.formCambioContrasenia = this.fb.group({
      [this.actualPassword]:[null,[
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}$/),
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      [this.password]:[null,[
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}$/),
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      [this.repeatPassword]:[null,[
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}$/),
        Validators.minLength(6),
        Validators.maxLength(20)
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


  /**
   * Returns form cambio de contraseña
   */
  get formCP() {
    return this.formCambioContrasenia.controls;
  }

  /**
   * Open center modal
   * @param centerDataModalChangePassword center modal data
   */
  centerModalChangePassword(centerDataModalChangePassword: any) {
    this.modalService.open(centerDataModalChangePassword, { centered: true, windowClass: 'modal-holder' });
  }

  /**
   * Close event modal
   */
    closeEventModal() {
      this.modalService.dismissAll();
    }
}
