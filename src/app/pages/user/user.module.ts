import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbDropdownModule, NgbPaginationModule, NgbTooltipModule, NgbAccordionModule, NgbTypeaheadModule, NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng5SliderModule } from "ng5-slider";
import { DropzoneModule, DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { config } from "rxjs";
import { UIModule } from "src/app/shared/ui/ui.module";
import { AdduserComponent } from "./adduser/adduser.component";
import { ListusersComponent } from "./listusers/listusers.component";
import { NgbdSortableHeader } from "./listusers/sortable.directive";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [AdduserComponent,ListusersComponent, NgbdSortableHeader2],
    imports: [
      UserRoutingModule,
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
  export class UserModule { }
  