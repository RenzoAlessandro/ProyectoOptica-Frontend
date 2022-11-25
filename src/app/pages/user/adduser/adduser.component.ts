import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  selectValue = [];
  selectedValue = '';
  stateValue = [];
  formRegister: FormGroup;
  nombres: string = "campoNombres";
  apellidos: string = "campoApellidos";
  dni: string = "campoDNI";
  rol: string = "campoRol";
  sede: string = "campoSede";
  telefono: string = "campoTelefono";
  password: string = "campoPassword";
  fechaNacimiento: string = "campoFechaNacimiento";
  repeatPassword: string = "campoRepeatPassword";
  email: string = "campoEmail";
  observaciones: string = "campoObservaciones";
  listRoles = [
    { cNombre:1, tNombre: "Admin" },
    { cNombre:2, tNombre: "Vendedor" },
    { cNombre:3, tNombre: "Contador" }
  ];
  listSedes: SedesModel[] = [];
  user= new UsersModel;
  lettersPattern = '[a-zA-Z ]*';
  numberPattern = '^[0-9]+$|^\S*$';
  passwordPattern = '/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/';
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Checkout', active: true }];

    this.selectValue = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola',
      'Anguilla', 'Antarctica', 'Argentina', 'Hawaii', 'California', 'Colombia', 'Congo', 'Dominica', 'Denmark', 'Nevada', 'Oregon',
      'Washington', 'Ecuador', 'Idaho', 'Montana', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Nicaragua', 'New Caledonia', 'North Dakota',
      'Tonga', 'Tunisia', 'Thailand', 'Turkey', 'Illinois', 'Tuvalu', 'Uganda', 'Uruguay', 'United Arab Emirates', 'United Kingdom', 'Venezuela', 'Zimbabwe',
      'Uruguay'];
    this.selectedValue = this.selectValue[0];

    this.stateValue = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Montana', 'Nevada', 'New Mexico', 'New York', 'North Dakota', 'Texas', 'Virginia', 'Wisconsin', 'Wyoming']
    this.crearFormulario();
    this.getListSedes();
  }

  crearFormulario(){
    this.formRegister = this.fb.group({
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
      rol:[this.listRoles[0].tNombre],
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

  f(campo:any){
    return this.formRegister.get(campo);
  }

  guardarUsuario(){
    if(this.formRegister.valid){
      this.user.apellidos = this.f(this.apellidos).value;
      this.user.dni = Number(this.f(this.dni).value);
      this.user.habilitado = true;
      this.user.fecha_creacion = new Date(Date.now());
      this.user.fecha_modificacion = new Date(Date.now());
      this.user.fecha_nacimiento = new Date(Date.now());
      this.user.nombres = this.f(this.nombres).value;
      this.user.rol = this.f('rol').value;
      this.user.telefono = this.f(this.telefono).value;
      this.user.id_sede = this.f('sede').value;
      console.log(this.user);
      this.usuarioService.createUsers(this.user).subscribe( res=>{
        console.log("registrado ok")
      }) 
    }
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

  getListSedes() {
    this.usuarioService.getSedes().subscribe(res=>{
      console.log(res);
      this.listSedes = res;
    })
  }
}
