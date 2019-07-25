import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultListPageComponent } from '../components/default-list-page/default-list-page.component';
import { DefaultEditPageComponent } from '../components/default-edit-page/default-edit-page.component';


const routes: Routes = [
  { path: 'list-internal-job-request', component: DefaultListPageComponent, data: { moduleName: 'maintenance', pageName: 'internalJobRequest' } },
  { path: 'list-shipyard-job-request-follow', component: DefaultListPageComponent, data: { moduleName: 'maintenance', pageName: 'shipyardJobRequestFollow' } },
  { path: 'list-Utensil-Damage-Follow', component: DefaultListPageComponent, data: { moduleName: 'maintenance', pageName: 'utensilDamageFollow' } },
  { path: 'list-Logistic-Request', component: DefaultListPageComponent, data: { moduleName: 'maintenance', pageName: 'logisticRequest' } },
  { path: 'list-Technical-Services-Projects', component: DefaultListPageComponent, data: { moduleName: 'maintenance', pageName: 'technicalServicesProjects' } },
  { path: 'list-Lifting-Equipment-Testing', component: DefaultListPageComponent, data: { moduleName: 'maintenance', pageName: 'LiftingEquipmentTesting' } },
  { path: 'list-Scrap-Follow', component: DefaultListPageComponent, data: { moduleName: 'maintenance', pageName: 'ScrapFollow' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
