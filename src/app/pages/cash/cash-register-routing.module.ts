import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

import { CashRegisterComponent } from './cash-register/cash-register.component';
import { ListCashComponent } from './list-cash/list-cash.component';

const routes: Routes = [
    {
        path: 'cashregister',
        component: CashRegisterComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    },
    {
        path: 'listcash',
        component: ListCashComponent,
        data: {
            role: ['Admin'],
          }, canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CashRegisterRoutingModule {}
