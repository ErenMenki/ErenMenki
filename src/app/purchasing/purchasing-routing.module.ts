import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsComponent } from './materials/materials.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ServicesComponent } from './services/services.component';
import { DefaultListPageComponent } from '../components/default-list-page/default-list-page.component';
import { DefaultEditPageComponent } from '../components/default-edit-page/default-edit-page.component';

const routes: Routes = [
  { path: 'list-material', component: DefaultListPageComponent, data: { moduleName: 'purchasing', pageName: 'material' } },
  { path: 'edit-material', component: DefaultEditPageComponent, data: { moduleName: 'purchasing', pageName: 'material' } },
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'list-services', component: ServicesComponent, data: { pid: 2000, aid: 0, flag: 1 } },
  { path: 'edit-services', component: ServicesComponent, data: { pid: 2000, aid: 1, flag: 1 } },

  { path: 'list-request', component: DefaultListPageComponent, data: { moduleName: 'purchasing', pageName: 'purchaseRequestList' } },
  { path: 'list-tender', component: DefaultListPageComponent, data: { moduleName: 'purchasing', pageName: 'purchaseTenderList' } },
  { path: 'list-suppliers', component: DefaultListPageComponent, data: { moduleName: 'purchasing', pageName: 'suppliersList' } },
  { path: 'list-equipment-groups', component: DefaultListPageComponent, data: { moduleName: 'purchasing', pageName: 'equipmentGroupList' } },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule { }
