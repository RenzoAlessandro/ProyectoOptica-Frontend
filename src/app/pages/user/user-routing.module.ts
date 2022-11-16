import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListUsersComponent } from "./list-users/list-users.component";

const routes: Routes = [
/*     {
        path: 'adduser',
        component: AdduserComponent
    }, */
    {
        path: 'listusers',
        component: ListUsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}