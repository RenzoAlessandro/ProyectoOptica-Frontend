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
import { AddStoreComponent } from "./add-store/add-store.component";
import { StoreRoutingModule } from "./store-routing.module";
import { ListStoresComponent } from "./list-stores/list-stores.component";
import { NgxDropzoneModule } from "ngx-dropzone";

@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [AddStoreComponent, ListStoresComponent],
    imports: [
      StoreRoutingModule,
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
      NgxDropzoneModule,
    ],
    providers: [
      {
        provide: DROPZONE_CONFIG,
        useValue: config
      }
    ]
  })
  export class StoreModule { }