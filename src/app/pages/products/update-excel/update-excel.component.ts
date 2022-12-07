import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-excel',
  templateUrl: './update-excel.component.html',
  styleUrls: ['./update-excel.component.scss']
})
export class UpdateExcelComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  message: string

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Actualización por Excel', active: true }];
    this.message = "<div class='mb-3'><i class=\"display-4 text-muted uil uil-cloud-upload\"></i></div>Suelte los archivos aquí o haga clic para cargar.";
  }
}
