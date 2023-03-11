import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SedesModel } from 'src/models/sedes';

@Component({
  selector: 'app-deleted-sales',
  templateUrl: './deleted-sales.component.html',
  styleUrls: ['./deleted-sales.component.scss']
})
export class DeletedSalesComponent implements OnInit {

  role = 'Admin'
  formSedes: FormGroup;
  listSedes: Array<SedesModel>;
  nombre_sedes: string = "campoSede";
  idSede:string = "";

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ventas' }, { label: 'Ventas Eliminas', active: true }];
    this.getListSedes();
  }

  getListSedes() {
    this.listSedes = JSON.parse(localStorage.getItem('sedes'));
    this.idSede = this.usuarioService.getSedebyUser();
  }
  
  crearFormularioEditarPrecio() {
    this.formSedes = this.fb.group({
      [this.nombre_sedes]: [this.idSede]
    })
  }

}
