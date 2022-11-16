import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdduserComponent } from "./adduser/adduser.component";
import { ListusersComponent } from "./listusers/listusers.component";

const routes: Routes = [
    {
        path: 'adduser',
        component: AdduserComponent
    },
    {
        path: 'listusers',
        component: ListusersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}