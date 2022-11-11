import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  selectValue = [];
  selectedValue = '';
  stateValue = [];
  formRegister: FormGroup;
  nombres: string = "campoNombres";
  apellidos: string = "campoApellidos";
  dni: string = "campoDNI";
  rol: string = "campoRol";
  sede: string = "campoSede";
  password: string = "campoPassword";
  repeatPassword: string = "campoRepeatPassword";
  listRoles = [
    { cNombre:1, tNombre: "Admin" },
    { cNombre:2, tNombre: "Vendedor" },
    { cNombre:3, tNombre: "Contador" }
  ];
  listSedes = [
    { cNombre:1, tNombre: "Lima" },
    { cNombre:2, tNombre: "Arequipa" },
    { cNombre:3, tNombre: "Cuzco" }
  ];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');

    this.selectValue = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola',
    'Anguilla', 'Antarctica', 'Argentina', 'Hawaii', 'California', 'Colombia', 'Congo', 'Dominica', 'Denmark', 'Nevada', 'Oregon',
    'Washington', 'Ecuador', 'Idaho', 'Montana', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Nicaragua', 'New Caledonia', 'North Dakota',
    'Tonga', 'Tunisia', 'Thailand', 'Turkey', 'Illinois', 'Tuvalu', 'Uganda', 'Uruguay', 'United Arab Emirates', 'United Kingdom', 'Venezuela', 'Zimbabwe',
    'Uruguay'];

    this.selectedValue = this.selectValue[0];

    this.stateValue = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Montana', 'Nevada', 'New Mexico', 'New York', 'North Dakota', 'Texas', 'Virginia', 'Wisconsin', 'Wyoming']
    this.crearFormulario();
  }

  crearFormulario(){
    this.formRegister = this.fb.group({
      [this.nombres]:[],
      [this.apellidos]:[],
      [this.dni]:[],
      [this.rol]:[],
      [this.sede]:[],
      [this.password]:[],
      [this.repeatPassword]:[]
    })
  }

  f(campo:any){
    return this.formRegister.get(campo);
  }

  guardarUsuario(){
    if(this.formRegister.valid){
      const usuario = {
        nombres: this.f(this.nombres).value,
        apellidos: this.f(this.apellidos).value,
        dni: this.f(this.dni).value,
        //rol: this.f(this.rol).value,
        //sede: this.f(this.sede).value
      }
    };

    this.usuarioService.getUsers().subscribe(
      res=> {
        console.log(res);
      }
    )
  }
}
