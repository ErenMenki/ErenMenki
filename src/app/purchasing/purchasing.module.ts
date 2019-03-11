import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { PurchasingRoutingModule } from './purchasing-routing.module';
import { MaterialsComponent } from './materials/materials.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [MaterialsComponent, EquipmentsComponent, ServicesComponent],
  imports: [
    CommonModule,
    PurchasingRoutingModule,
    ComponentsModule,
  ]
})
export class PurchasingModule { }
