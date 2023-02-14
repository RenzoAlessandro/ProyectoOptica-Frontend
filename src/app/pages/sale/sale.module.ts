import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule, NgbModule, NgbNavModule, } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng5SliderModule } from "ng5-slider";
import { DropzoneModule, DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { config } from "rxjs";
import { UIModule } from "src/app/shared/ui/ui.module";
import { AddSaleComponent } from "./add-sale/add-sale.component";
import { SaleRoutingModule } from "./sale-routing.module";
import { ListSalesComponent } from "./list-sales/list-sales.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { DirectivesModule } from "src/app/directives/role.module";


@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [AddSaleComponent, ListSalesComponent ],
    imports: [
      SaleRoutingModule,
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
      AutocompleteLibModule,
      NgbModule,
      DirectivesModule
    ],
    exports:[
      //RoleDirective
    ],
    providers: [
      {
        provide: DROPZONE_CONFIG,
        useValue: config
      }
    ]
  })
  export class SaleModule { }