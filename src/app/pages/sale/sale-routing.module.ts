import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { AddSaleComponent } from "./add-sale/add-sale.component";
import { ListSalesComponent } from "./list-sales/list-sales.component";
import { DeletedSalesComponent } from "./deleted-sales/deleted-sales.component";

const routes: Routes = [
    {
        path: 'addsale',
        component: AddSaleComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    }, 
    {
        path: 'listsales',
        component: ListSalesComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    },
    {
        path: 'deletesales',
        component: DeletedSalesComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaleRoutingModule {}