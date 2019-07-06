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
  { path: 'services-list', component: ServicesComponent, data: { pid: 2000, aid: 0, flag: 1 } },
  { path: 'services-edit', component: ServicesComponent, data: { pid: 2000, aid: 1, flag: 1 } },

  { path: 'list-request', component: DefaultListPageComponent, data: { moduleName: 'purchasing', pageName: 'purchaseRequestList' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule { }
