import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  listSedes: Array<SedesModel>;

  year: number = new Date().getFullYear();
  formLogin: FormGroup;
  user: string = "campoUser";
  password: string = "campoPassword";
  sede: string = "campoSede";
  
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.getListSedes();
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
    if (this.formLogin.valid) {
      const  vendedor = {
        email: this.f(this.user).value,
        password: this.f(this.password).value,
        //sede: this.f('sede').value
      }
      
      console.log(vendedor);
      this.usuarioService.signIn(vendedor).subscribe(res=> {
        console.log('entre',res);
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['/dashboard']);
      })

    } else {
      
    }
  }

  getListSedes() {
    this.usuarioService.getSedes().subscribe(res=>{
      console.log(res);
      this.listSedes = res;
    })
  }

}
