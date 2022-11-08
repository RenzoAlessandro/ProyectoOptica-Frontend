import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unicons',
  templateUrl: './unicons.component.html',
  styleUrls: ['./unicons.component.scss']
})
export class UniconsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Icons' }, { label: 'Unicons', active: true }];
  }
}
