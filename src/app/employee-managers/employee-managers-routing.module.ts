import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManagerListComponent } from './employee-manager-list/employee-manager-list.component';

const routes: Routes = [ 
  {
    path: '',
    component: EmployeeManagerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class EmployeeManagersRoutingModule {}
