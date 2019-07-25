import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ImsRoutingModule } from './ims-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ImsRoutingModule
  ]
})
export class ImsModule { }
