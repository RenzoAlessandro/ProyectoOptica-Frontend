import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SedesModel } from 'src/models/sedes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showNavigationArrows: any;
  showNavigationIndicators: any;

  listSedes: Array<SedesModel>;

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

export class NgbdCarouselBasic {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
