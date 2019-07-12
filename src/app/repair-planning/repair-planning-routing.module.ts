import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultListPageComponent } from '../components/default-list-page/default-list-page.component';

const routes: Routes = [
  { path: 'edit-project', component: DefaultListPageComponent, data: { moduleName: 'repair-planning', pageName: 'repairProjectEdit' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairPlanningRoutingModule { }
