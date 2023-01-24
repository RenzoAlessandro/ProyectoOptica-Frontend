import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultHomeComponent } from './default-home/default-home.component';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultHomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
