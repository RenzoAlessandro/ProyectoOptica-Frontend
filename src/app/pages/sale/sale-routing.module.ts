import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddSaleComponent } from "./add-sale/add-sale.component";
import { ListSalesComponent } from "./list-sales/list-sales.component";

const routes: Routes = [
    {
        path: 'addsale',
        component: AddSaleComponent
    }, 
    {
        path: 'listsales',
        component: ListSalesComponent
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SaleRoutingModule {}