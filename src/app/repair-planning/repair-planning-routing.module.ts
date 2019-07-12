import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultListPageComponent } from '../components/default-list-page/default-list-page.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  { path: 'edit-project', component: ProjectEditComponent, data: { pid: 4000, aid: 1 } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairPlanningRoutingModule { }
