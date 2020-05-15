import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailsRoutingModule } from './email-routing.module';

@NgModule({
  declarations: [EmailListComponent],
  imports: [EmailsRoutingModule, SharedModule],
})
export class EmailsModule {}
