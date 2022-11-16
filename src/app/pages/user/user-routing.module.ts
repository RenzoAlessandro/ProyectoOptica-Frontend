import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdduserComponent } from "./adduser/adduser.component";


const routes: Routes = [
    {
        path: 'adduser',
        component: AdduserComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}