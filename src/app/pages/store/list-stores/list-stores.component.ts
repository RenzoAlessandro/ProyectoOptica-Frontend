import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  listSedes: any;

  constructor(
    private sedeService: SedeService
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tiendas' }, { label: 'Lista de Tiendas', active: true }];
    this.getListSedes();
  }

  getListSedes() {
    this.sedeService.getSedes().subscribe(res => {
      console.log(res)
      this.listSedes = res;
    })
  }
}
