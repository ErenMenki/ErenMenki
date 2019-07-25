import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultMasterDetailPageComponent } from '../components/default-master-detail-page/default-master-detail-page.component';
import { DefaultListPageComponent } from '../components/default-list-page/default-list-page.component';
import { DefaultEditPageComponent } from '../components/default-edit-page/default-edit-page.component';

const routes: Routes = [
  { path: 'list-warehouse-intakes', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'warehouseIntakes' } },
  // tslint:disable-next-line: max-line-length
  { path: 'list-warehouse-withdraws', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'warehouseWithdraws' } },
  // tslint:disable-next-line: max-line-length
  { path: 'list-warehouse-project-returns', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'warehouseProjectReturns' } },
  // tslint:disable-next-line: max-line-length
  { path: 'list-warehouse-tansfers', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'warehouseTransfers' } },
  { path: 'list-rental-equipments', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'rentalEquipments' } },
  // tslint:disable-next-line: max-line-length
  { path: 'list-warehouse-return-equipments', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'warehouseReturnEquipments' } },
  // tslint:disable-next-line: max-line-length
  { path: 'list-warehouse-withdraw-equipments', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'warehouseWithdrawEquipments' } },
  // tslint:disable-next-line: max-line-length
  { path: 'list-warehouse-scrap-equipments', component: DefaultListPageComponent, data: { moduleName: 'warehouse', pageName: 'warehouseScrapEquipments' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
