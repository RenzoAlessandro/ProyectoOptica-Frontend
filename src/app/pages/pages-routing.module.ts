import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
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
  { path: 'dashboard', component: DefaultComponent, canActivate: [AuthGuard]  },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]  },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard]  },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), canActivate: [AuthGuard], data: {
    role: 'Admin'
  }  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard], data: {
    role: ['Vendedor','Admin'],
  }  },
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule), canActivate: [AuthGuard]  },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard], data: {
    role: 'Admin'
  }  },
  { path: 'sale', loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule), canActivate: [AuthGuard]  },
  { path: 'cash-register', component: CashRegisterComponent, canActivate: [AuthGuard],data: {
    role: ['Vendedor','Admin'],
  }  },
  { path: 'home', component: DefaultHomeComponent, canActivate: [AuthGuard],data: {
    role: ['Vendedor','Admin'],
  }  },

  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule), canActivate: [AuthGuard]  },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule), canActivate: [AuthGuard]  },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule), canActivate: [AuthGuard]  },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule), canActivate: [AuthGuard]  },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule), canActivate: [AuthGuard]  },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule), canActivate: [AuthGuard]  },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule), canActivate: [AuthGuard]  },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule), canActivate: [AuthGuard]  },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule), canActivate: [AuthGuard]  },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule), canActivate: [AuthGuard]  },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule), canActivate: [AuthGuard]  },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule), canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
