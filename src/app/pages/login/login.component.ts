import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');
  }
}
