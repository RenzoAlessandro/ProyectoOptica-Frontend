import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  year: number = new Date().getFullYear();
  formLogin: FormGroup;
  user: string = "campoUser";
  password: string = "campoPassword";
  sede: string = "campoSede";
  constructor(
    private fb: FormBuilder
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
      [this.password]: []
    })
  }

  conectar() {
    if (this.formLogin.valid) {
      const  vendedor = {
        usuario: this.f(this.user).value,
        pass: this.f(this.password).value,
        sede: this.f('sede').value
      }
    } else {
      
    }
  }
}
