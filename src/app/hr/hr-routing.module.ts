import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultMasterDetailPageComponent } from '../components/default-master-detail-page/default-master-detail-page.component';
import { DefaultListPageComponent } from '../components/default-list-page/default-list-page.component';
import { DefaultEditPageComponent } from '../components/default-edit-page/default-edit-page.component';

const routes: Routes = [
  { path: 'list-duty-codes', component: DefaultListPageComponent, data: { moduleName: 'hr', pageName: 'dutycodes' } },
  { path: 'edit-duty-code', component: DefaultEditPageComponent, data: { moduleName: 'hr', pageName: 'dutycodes' } },
  { path: 'list-incident-scenes', component: DefaultListPageComponent, data: { moduleName: 'hr', pageName: 'incidentScenes' } },
  { path: 'edit-incident-scenes', component: DefaultEditPageComponent, data: { moduleName: 'hr', pageName: 'incidentScenes' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
