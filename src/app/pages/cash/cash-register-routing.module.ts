import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashRegisterComponent } from './cash-register/cash-register.component';
import { ListCashComponent } from './list-cash/list-cash.component';

const routes: Routes = [
    {
        path: 'cashregister',
        component: CashRegisterComponent
    },
    {
        path: 'listcash',
        component: ListCashComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CashRegisterRoutingModule {}
