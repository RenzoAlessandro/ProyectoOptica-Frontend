import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimplebarAngularModule } from 'simplebar-angular';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbPaginationModule, NgbAccordionModule, NgbTypeaheadModule, NgbCollapseModule  } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderService } from '../core/services/loader.service';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomersComponent } from './customers/customers.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { MonturasComponent } from './list-products/monturas/monturas.component';
import { LunasComponent } from './list-products/lunas/lunas.component';
import { AccesoriosComponent } from './list-products/accesorios/accesorios.component';
import { ListUsersComponent } from './user/list-users/list-users.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [CalendarComponent, ChatComponent, LoginComponent, RegisterComponent, CustomersComponent, RegisterUsersComponent, MonturasComponent, LunasComponent, AccesoriosComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    UIModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    HttpClientModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    SimplebarAngularModule
  ]
})
export class PagesModule { }
