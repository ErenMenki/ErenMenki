import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { RepairPlanningRoutingModule } from './repair-planning-routing.module';
import { ProjectEditComponent } from './project-edit/project-edit.component';

@NgModule({
  declarations: [ProjectEditComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RepairPlanningRoutingModule
  ]
})
export class RepairPlanningModule { }
