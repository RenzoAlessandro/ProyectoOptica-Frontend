import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CashRegisterRoutingModule } from './cash-register-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { NgbModule, NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { FormModule } from '../form/form.module';
import { CashRegisterComponent } from './cash-register/cash-register.component';

@NgModule({
  declarations: [CashRegisterComponent],
  imports: [
    CommonModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    CashRegisterRoutingModule,
    UIModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgbModule,
    Ng2FlatpickrModule
  ]
})
export class CashRegisterModule { }
