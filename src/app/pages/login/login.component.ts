import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SedeService } from 'src/app/services/sede.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';
import { backgroundModel, backgroundList } from './background.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public backgrounds: backgroundModel[] = [];

  showNavigationArrows: any;
  showNavigationIndicators: any;

  year: number = new Date().getFullYear();
  formLogin: FormGroup;
  user: string = "campoUser";
  password: string = "campoPassword";
  sede: string = "campoSede";
  logoURL: any;
  
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private sedeService: SedeService
  ) { }


  ngOnInit(): void {
    this.backgrounds = Object.assign([], backgroundList);
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');
    this.crearFormulario();
  }

  f(campo: string) {
    return this.formLogin.get(campo);
  }
  crearFormulario() {
    this.formLogin = this.fb.group({
      [this.user] :[null,[
        Validators.required
      ]],
      [this.password]: [null,[
        Validators.required
      ]]
    })
  }

  login() {
    Sweetalert("loading", "Cargando...");
    if (this.formLogin.valid) {
      const  vendedor = {
        email: this.f(this.user).value,
        password: this.f(this.password).value,
        //sede: this.f('sede').value
      }
      
      this.usuarioService.signIn(vendedor).subscribe(res=> {
        this.usuarioService.storeUserData(res.token, res.onlyDataUser);
        this.getListSedes();
        Sweetalert("close", null);
      }) 

    } else {
      
    }
  }

   getListSedes() {
    this.sedeService.getSedes().subscribe(res=> {
      let idSede = this.usuarioService.getSedebyUser();
    this.sede = res.find(sede => sede.id_sede === idSede);
      //LOGO_URL = this.sede.logoURL;
      localStorage.setItem("sedes",JSON.stringify(res));
    })
  } 

}


