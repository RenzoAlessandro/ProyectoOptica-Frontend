import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";

import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { ListCustomersComponent } from "./list-customers/list-customers.component";

const routes: Routes = [
    {
        path: 'addcustomer',
        component: AddCustomerComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    }, 
    {
        path: 'listcustomers',
        component: ListCustomersComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}