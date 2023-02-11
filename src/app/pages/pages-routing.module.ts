import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashRegisterComponent } from './cash/cash-register/cash-register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { DefaultHomeComponent } from './home/default-home/default-home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'login' },
  //{ path: '**', redirectTo: 'login' },
  { path: 'login',component: LoginComponent },
  { path: 'profile',component: ProfileComponent },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), canActivate: [AuthGuard], data: {
    role: 'Admin'
  }  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)   },
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule), canActivate: [AuthGuard]  },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard], data: {
    role: 'Admin'
  }  },
  { path: 'sale', loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule), canActivate: [AuthGuard]  },
  { path: 'cash', loadChildren: () => import('./cash/cash-register.module').then(m => m.CashRegisterModule), canActivate: [AuthGuard], data: {
    role: ['Vendedor','Admin'],
  }  },


  { path: 'home', component: DefaultHomeComponent, canActivate: [AuthGuard],data: {
    role: ['Vendedor','Admin'],
  }  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
