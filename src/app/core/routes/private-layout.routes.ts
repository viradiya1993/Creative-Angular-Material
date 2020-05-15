import { Routes } from '@angular/router';
import { DashboardComponent } from '@app/dashboard/dashboard.component';

// Route for content layout with navbar, footer etc...
export const privateRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'employee-managers',
    loadChildren: () =>
      import('../../employee-managers/employee-managers.module').then((m) => m.EmployeeManagersModule),
  },
  {
    path: 'account-managers',
    loadChildren: () => import('../../account-managers/account-managers.module').then((m) => m.AccountManagersModule),
  },
  {
    path: 'emails',
    loadChildren: () => import('../../emails/emails.module').then((m) => m.EmailsModule),
  },
  {
    path: 'sales',
    loadChildren: () => import('../../sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: 'purchases',
    loadChildren: () => import('../../purchases/purchases.module').then((m) => m.PurchasesModule),
  },
];
