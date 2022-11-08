import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

/**
 * Ecommerce add-product component
 */
export class AddproductComponent implements OnInit {

  items = [];
  selected = [];

  constructor() { }

  // bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Add Product', active: true }];

    this.items = ['High Quality', 'Leather', 'Notifications', 'Sizes', 'Different Color'];
    this.selected = ['High Quality', 'Leather'];

  }
}
