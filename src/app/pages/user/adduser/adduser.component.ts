import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';
import { UsersModel } from 'src/models/user';
import { Sweetalert } from '../../../../utils/sweetalert';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  // bread crumb items
  // Hola
  breadCrumbItems: Array<{}>;
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
  fechaCreacion: string = "campoFechaCreacion";
  email: string = "campoEmail";
  observaciones: string = "campoObservaciones";
  listRoles = [
    { cNombre:1, tNombre: "Admin" },
    { cNombre:2, tNombre: "Vendedor" },
    { cNombre:3, tNombre: "Contador" }
  ];
  listSedes: SedesModel[] = [];
  user= new UsersModel;
  lettersPattern = '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'; // Incluimos Ññ y tildes en cada vocal
  numberPattern = '^[0-9]+$|^\S*$';

  /* passwordPattern = '/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}$/'; 
  Una contraseña se considera válida si se cumplen todas las siguientes restricciones:
    - Contiene al menos 6 caracteres y como máximo 20 caracteres.
    - Contiene al menos un dígito.
    - Contiene al menos un alfabeto en mayúsculas.
    - Contiene al menos un alfabeto en minúsculas.
    - Contiene al menos un carácter especial que incluye @$!%*#?&^_-  
    - Si contiene espacio en blanco.
  */
  fecha_actual: Date;
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Usuarios' }, { label: 'Añadir Usuarios', active: true }];
    this.crearFormulario();
    this.getListSedes();
  }

  crearFormulario(){
    this.fecha_actual = new Date(Date.now());
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
        Validators.pattern(this.numberPattern),
        Validators.min(111111111),
        Validators.max(999999999)
      ]],
      [this.fechaNacimiento]:[null,[
        //Validators.required
      ]],
      [this.fechaCreacion]:[{value:this.fecha_actual.toLocaleDateString(), disabled: true}],
      sede:[],
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

  f(campo:string){
    return this.formRegister.get(campo);
  }

  guardarUsuario(){
    if(this.formRegister.valid){
      this.user.apellidos = this.f(this.apellidos).value;
      this.user.dni = this.f(this.dni).value;
      this.user.habilitado = true;
      this.user.fecha_creacion = new Date(Date.now());
      this.user.fecha_modificacion = new Date(Date.now());
      this.user.fecha_nacimiento = this.f(this.fechaNacimiento).value;
      this.user.nombres = this.f(this.nombres).value;
      this.user.rol = this.f('rol').value;
      this.user.telefono = this.f(this.telefono).value;
      this.user.id_sede = this.f('sede').value;
      this.user.observaciones = this.f(this.observaciones).value;
      this.user.email = this.f(this.email).value;
      this.user.contrasenia = this.f(this.password).value;
      console.log(this.user);
      Sweetalert("loading", "Cargando...");
      this.usuarioService.createUsers(this.user).subscribe( res=>{
        Sweetalert("close",null);
        Sweetalert("success", "Usuario guardado");
        this.formRegister.reset();
        this.f(this.fechaCreacion).setValue(new Date(Date.now()).toLocaleDateString())
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

  /**
   * Returns form Usuarios
   */
  get formU() {
    return this.formRegister.controls;
  }
}
