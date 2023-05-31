import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule, NgbModule, NgbNavModule, } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng5SliderModule } from "ng5-slider";
import { UIModule } from "src/app/shared/ui/ui.module";
import { AccesoriosComponent } from "./accesorios/accesorios.component";
import { NgbdSortableHeader } from "./accesorios/sortable.directive";
import { AddProductComponent } from "./add-product/add-product.component";
import { LunasComponent } from "./lunas/lunas.component";
import { MonturasComponent } from "./monturas/monturas.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { UpdateExcelComponent } from './update-excel/update-excel.component';

import { DropzoneModule, DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from "ngx-dropzone";
import { BarcodeGeneratorAllModule,QRCodeGeneratorAllModule } from "@syncfusion/ej2-angular-barcode-generator";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { Labels } from "src/utils/labels";
import { InventarioComponent } from './inventario/inventario.component';
import { DirectivesModule } from "src/app/directives/role.module";
import { TrasladosComponent } from './traslados/traslados.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
};

@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [AddProductComponent, LunasComponent, MonturasComponent, AccesoriosComponent, NgbdSortableHeader, UpdateExcelComponent, InventarioComponent, TrasladosComponent],
    imports: [
      ProductsRoutingModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      Ng2SearchPipeModule,
      NgbDropdownModule,
      DropzoneModule,
      UIModule,
      Ng5SliderModule,
      NgSelectModule,
      NgbPaginationModule,
      NgbTooltipModule,
      NgbAccordionModule,
      NgbTypeaheadModule,
      NgbCollapseModule,
      NgbNavModule,
      NgbModule,
      NgxDropzoneModule,
      BarcodeGeneratorAllModule,
      AutocompleteLibModule,
      QRCodeGeneratorAllModule,
      DirectivesModule
    ],
    providers: [
      Labels,
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }
    ]
  })
  export class ProductsModule { }