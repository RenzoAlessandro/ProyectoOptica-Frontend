import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccesoriosComponent } from "./accesorios/accesorios.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { LunasComponent } from "./lunas/lunas.component";
import { MonturasComponent } from "./monturas/monturas.component";
import { UpdateExcelComponent } from "./update-excel/update-excel.component";
import { InventarioComponent } from "./inventario/inventario.component";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { TrasladosComponent } from "./traslados/traslados.component";

const routes: Routes = [
    {
        path: 'addproducts',
        component: AddProductComponent, data: {
            role: ['Admin'],
          }, canActivate: [AuthGuard]
    }, 
    {
        path: 'accesorios',
        component: AccesoriosComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    },
    {
        path: 'lunas',
        component: LunasComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    }, 
    {
        path: 'monturas',
        component: MonturasComponent,
        data: {
            role: ['Vendedor','Admin'],
          }, canActivate: [AuthGuard]
    },  
    {
        path: 'updateexcel',
        component: UpdateExcelComponent,
        data: {
            role: ['Admin'],
          }, canActivate: [AuthGuard]
    },
    {
        path: 'inventario',
        component: InventarioComponent,
        data: {
            role: ['Admin'],
          }, canActivate: [AuthGuard]
    },
    {
        path: 'traslados',
        component: TrasladosComponent,
        data: {
            role: ['Admin'],
          }, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}