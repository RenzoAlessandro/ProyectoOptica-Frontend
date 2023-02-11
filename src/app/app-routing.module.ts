import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { AccesoriosComponent } from './pages/products/accesorios/accesorios.component';
import { LunasComponent } from './pages/products/lunas/lunas.component';
import { MonturasComponent } from './pages/products/monturas/monturas.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Page404Component } from './extrapages/page404/page404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'monturas', component: MonturasComponent},
  { path: 'lunas', component: LunasComponent},
  { path: 'accesorios', component: AccesoriosComponent},
  //{ path: '**', redirectTo: '404', pathMatch: 'full'},
  //{ path: '**', redirectTo: '404',component: Page404Component},
  // tslint:disable-next-line: max-line-length
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
