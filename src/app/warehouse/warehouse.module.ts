import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { WarehouseRoutingModule } from './warehouse-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
