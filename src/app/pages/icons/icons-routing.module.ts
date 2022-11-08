import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxiconsComponent } from './boxicons/boxicons.component';
import { MaterialdesignComponent } from './materialdesign/materialdesign.component';
import { DripiconsComponent } from './dripicons/dripicons.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { UniconsComponent } from './unicons/unicons.component';

const routes: Routes = [
    {
        path: 'unicons',
        component: UniconsComponent
    },
    {
        path: 'boxicons',
        component: BoxiconsComponent
    },
    {
        path: 'materialdesign',
        component: MaterialdesignComponent
    },
    {
        path: 'dripicons',
        component: DripiconsComponent
    },
    {
        path: 'fontawesome',
        component: FontawesomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IconsRoutingModule { }
