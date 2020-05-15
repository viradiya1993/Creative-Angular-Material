import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { SaleOrderListComponent } from './sales-orders/sale-order-list/sale-order-list.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [SaleOrderListComponent],
  imports: [SharedModule, SalesRoutingModule],
})
export class SalesModule {}
