import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashRegisterComponent } from './cash-register/cash-register.component';

const routes: Routes = [
    {
        path: 'default',
        component: CashRegisterComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CashRegisterRoutingModule {}
