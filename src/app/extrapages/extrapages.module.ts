import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';

import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [MaintenanceComponent, Page404Component, Page500Component, ComingsoonComponent, LockscreenComponent],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule,
    NgbCarouselModule
  ]
})
export class ExtrapagesModule { }
