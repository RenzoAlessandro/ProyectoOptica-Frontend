import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SedeService } from 'src/app/services/sede.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Sweetalert } from 'src/utils/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showNavigationArrows: any;
  showNavigationIndicators: any;


  year: number = new Date().getFullYear();
  formLogin: FormGroup;
  user: string = "campoUser";
  password: string = "campoPassword";
  sede: string = "campoSede";
  
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private sedeService: SedeService
  ) { }


  ngOnInit(): void {
    
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');
    this.crearFormulario();
  }

  f(campo: string) {
    return this.formLogin.get(campo);
  }
  crearFormulario() {
    this.formLogin = this.fb.group({
      [this.user] :[],
      [this.password]: [],
      sede:[]
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
      
      console.log(vendedor);
      


      this.usuarioService.signIn(vendedor).subscribe(res=> {
        console.log('entre',res);
        
        this.usuarioService.storeUserData(res.token, res.onlyDataUser);
        this.getListSedes();
        Sweetalert("close", null);
      }) 

    } else {
      
    }
  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res=> {
      localStorage.setItem("sedes",JSON.stringify(res));
    })
  }

}


