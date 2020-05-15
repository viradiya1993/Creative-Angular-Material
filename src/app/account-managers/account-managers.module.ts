import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AccountManagerListComponent } from './account-manager-list/account-manager-list.component';
import { AccountManagersRoutingModule } from './account-managers-routing.module';

@NgModule({
  declarations: [AccountManagerListComponent],
  imports: [SharedModule, AccountManagersRoutingModule],
})
export class AccountManagersModule {}
