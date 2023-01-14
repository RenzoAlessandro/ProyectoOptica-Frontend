import { Component, OnInit } from '@angular/core';
import { SedesModel } from 'src/models/sedes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  listSedes: Array<SedesModel>;

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');
  }


}
