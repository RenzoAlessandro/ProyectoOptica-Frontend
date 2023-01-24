import { Component, OnInit } from '@angular/core';
import { accesosModel , accesosList} from './product.model';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit {

  breadCrumbItems: Array<{}>;

  public accesosDirectos: accesosModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Contacto Visual' }, { label: 'Inicio', active: true }];
    this.accesosDirectos = Object.assign([], accesosList);
  }
}
