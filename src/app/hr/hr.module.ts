import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { HrRoutingModule } from './hr-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HrRoutingModule
  ]
})
export class HrModule { }
