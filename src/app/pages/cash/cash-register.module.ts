import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CashRegisterRoutingModule } from './cash-register-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng5SliderModule } from "ng5-slider";
import { DropzoneModule, DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { config } from "rxjs";

import { CashRegisterComponent } from './cash-register/cash-register.component';
import { ListCashComponent } from './list-cash/list-cash.component';


@NgModule({
  declarations: [CashRegisterComponent, ListCashComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CashRegisterRoutingModule,
    UIModule,
    DropzoneModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    Ng5SliderModule,
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
export class CashRegisterModule { }
