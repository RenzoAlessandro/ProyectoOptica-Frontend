import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { ListCustomersComponent } from "./list-customers/list-customers.component";

const routes: Routes = [
    {
        path: 'addcustomer',
        component: AddCustomerComponent
    }, 
    {
        path: 'listcustomers',
        component: ListCustomersComponent
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}