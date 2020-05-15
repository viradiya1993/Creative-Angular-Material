import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleOrderListComponent } from './sales-orders/sale-order-list/sale-order-list.component';

const routes: Routes = [
  {
    path: '',
    component: SaleOrderListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class SalesRoutingModule {}
