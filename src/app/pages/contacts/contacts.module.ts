import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// import { WidgetModule } from '../../shared/widget/widget.module';
import { UIModule } from '../../shared/ui/ui.module';
import { ContactsRoutingModule } from './contacts-routing.module';

import { UsergridComponent } from './usergrid/usergrid.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule, NgbNavModule, NgbDropdownModule, NgbPaginationModule, NgbAccordionModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
  declarations: [UsergridComponent, UserlistComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule,
    // WidgetModule,
    UIModule,
    NgApexchartsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbPaginationModule,
    Ng2SearchPipeModule,
    SimplebarAngularModule,
    NgbTypeaheadModule,
    NgbModule
  ]
})
export class ContactsModule { }
