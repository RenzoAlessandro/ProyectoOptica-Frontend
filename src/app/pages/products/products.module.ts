import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng5SliderModule } from "ng5-slider";
import { DropzoneModule, DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { config } from "rxjs";
import { UIModule } from "src/app/shared/ui/ui.module";
import { AccesoriosComponent } from "./accesorios/accesorios.component";
import { NgbdSortableHeader } from "./accesorios/sortable.directive";
import { AddProductComponent } from "./add-product/add-product.component";
import { LunasComponent } from "./lunas/lunas.component";
import { MonturasComponent } from "./monturas/monturas.component";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [AddProductComponent, LunasComponent, MonturasComponent, AccesoriosComponent, NgbdSortableHeader],
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
      NgbCollapseModule
    ],
    providers: [
      {
        provide: DROPZONE_CONFIG,
        useValue: config
      }
    ]
  })
  export class ProductsModule { }