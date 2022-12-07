import { Component, OnInit } from '@angular/core';
import { SedeService } from 'src/app/services/sede.service';

import { shopsData } from './data';

import { Stores } from './list-stores.model';


@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  shopsData: Stores[];
  listSedes: any;

  constructor(
    private sedeService: SedeService
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tiendas' }, { label: 'Lista de Tiendas', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
    this.getListSedes();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.shopsData = shopsData;
  }


  getListSedes() {
    this.sedeService.getSedes().subscribe(res => {
      console.log(res)
      this.listSedes = res;
    })
  }
}
