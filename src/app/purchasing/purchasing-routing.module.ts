import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsComponent } from './materials/materials.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: 'materials', component : MaterialsComponent},
  {path: 'equipments', component : EquipmentsComponent},
  {path: 'services', component : ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule { }
