import { NgModule } from '@angular/core';
import { EmployeeManagerListComponent } from './employee-manager-list/employee-manager-list.component';
import { EmployeeManagersRoutingModule } from './employee-managers-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [EmployeeManagerListComponent],
  imports: [EmployeeManagersRoutingModule, SharedModule],
})
export class EmployeeManagersModule {}
