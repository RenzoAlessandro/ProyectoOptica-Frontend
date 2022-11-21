import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Shops', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.shopsData = shopsData;
  }

}
