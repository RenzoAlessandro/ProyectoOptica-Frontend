import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { accesosModel , accesosList} from './accesos.model';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  menu :accesosModel[];
  public accesosDirectos: accesosModel[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Orange Ópticas' }, { label: 'Inicio', active: true }];
    this.menu = accesosList.filter(element=>{
      console.log(element.role.find(el =>(el == this.usuarioService.getSedebyUser())))
      return element.role.find(el =>(el == this.usuarioService.getUser().rol))
    })
    this.accesosDirectos = Object.assign([], this.menu);
  }
}
