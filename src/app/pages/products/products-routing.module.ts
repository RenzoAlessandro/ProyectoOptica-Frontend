import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccesoriosComponent } from "./accesorios/accesorios.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { LunasComponent } from "./lunas/lunas.component";
import { MonturasComponent } from "./monturas/monturas.component";
import { UpdateExcelComponent } from "./update-excel/update-excel.component";
import { InventarioComponent } from "./inventario/inventario.component";

const routes: Routes = [
    {
        path: 'addproducts',
        component: AddProductComponent
    }, 
    {
        path: 'accesorios',
        component: AccesoriosComponent
    },
    {
        path: 'lunas',
        component: LunasComponent
    }, 
    {
        path: 'monturas',
        component: MonturasComponent
    },  
    {
        path: 'updateexcel',
        component: UpdateExcelComponent
    },
    {
        path: 'inventario',
        component: InventarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}