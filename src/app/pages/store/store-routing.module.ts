import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddStoreComponent } from "./add-store/add-store.component";
import { ListStoresComponent } from "./list-stores/list-stores.component";

const routes: Routes = [
    {
        path: 'addstore',
        component: AddStoreComponent
    }, 
    {
        path: 'liststores',
        component: ListStoresComponent
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {}