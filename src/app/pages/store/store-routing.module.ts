import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { AddStoreComponent } from "./add-store/add-store.component";
import { ListStoresComponent } from "./list-stores/list-stores.component";

const routes: Routes = [
    {
        path: 'addstore',
        component: AddStoreComponent,
        data: {
            role: ['Admin'],
          }, canActivate: [AuthGuard]
    }, 
    {
        path: 'liststores',
        component: ListStoresComponent,
        data: {
            role: ['Admin'],
          }, canActivate: [AuthGuard]
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {}