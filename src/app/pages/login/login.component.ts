import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');
  }
}

export class NgbdCarouselBasic {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
