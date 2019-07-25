import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultListPageComponent } from '../components/default-list-page/default-list-page.component';
import { DefaultEditPageComponent } from '../components/default-edit-page/default-edit-page.component';


const routes: Routes = [
  { path: 'list-Calibration-Follow', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'CalibrationFollowUpList' } },
  { path: 'list-Coap', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'CoapList' } },
  { path: 'list-Coap-Root-Causes', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'CoapRootCausesList' } },
  { path: 'list-Coap-Root-Causes', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'CoapRootCausesList' } },
  { path: 'list-Customer-Visit-Follow-Up', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'CustomerVisitFollowUpList' } },
  { path: 'list-Document-Tree', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'DocumentTree' } },
  { path: 'list-Lifting-Equipments-Load-Testing', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'LiftingEquipmentsLoadTestingList' } },
  { path: 'list-Master-Table', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'MasterTable' } },
  { path: 'list-Periodic-Maintenance-Follow-Up', component: DefaultListPageComponent, data: { moduleName: 'ims', pageName: 'PeriodicMaintenanceFollowUpList' } },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImsRoutingModule { }
