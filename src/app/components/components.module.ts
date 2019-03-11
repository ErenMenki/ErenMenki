import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';


import { DatagridComponent } from './datagrid/datagrid.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';

import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  declarations: [
    DatagridComponent,
    FormGeneratorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [
    DatagridComponent,
    FormGeneratorComponent
  ],
})
export class ComponentsModule { }
