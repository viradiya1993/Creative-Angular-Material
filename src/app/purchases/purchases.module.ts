import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PurchaseOrderListComponent } from './purchase-orders/purchase-order-list/purchase-order-list.component';
import { PurchasesRoutingModule } from './purchase-routing.module';

@NgModule({
  declarations: [PurchaseOrderListComponent],
  imports: [SharedModule, PurchasesRoutingModule],
})

export class PurchasesModule {}
