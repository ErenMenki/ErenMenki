import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

// Angular AG Grid
import { AgGridModule } from 'ag-grid-angular';

import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatIconModule
} from '@angular/material';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioComponent } from './radio/radio.component';
import { FileComponent } from './file/file.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatecomboComponent } from './datecombo/datecombo.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
import { FormItemDirective } from './form/form-item.directive';
import { ButtonbarComponent } from './buttonbar/buttonbar.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { PageComponent } from './page/page.component';

import { DefaultMasterDetailPageComponent } from './default-master-detail-page/default-master-detail-page.component';
import { DefaultListPageComponent } from './default-list-page/default-list-page.component';
import { DefaultEditPageComponent } from './default-edit-page/default-edit-page.component';

@NgModule({
  declarations: [
    DatagridComponent,
    CheckboxComponent,
    DropdownComponent,
    RadioComponent,
    FileComponent,
    AutocompleteComponent,
    DatepickerComponent,
    DatecomboComponent,
    ButtonComponent,
    InputComponent,
    FormComponent,
    FormItemDirective,
    ButtonbarComponent,
    PageComponent,
    DefaultMasterDetailPageComponent,
    DefaultListPageComponent,
    DefaultEditPageComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatIconModule,
  ],
  entryComponents:[
    CheckboxComponent,
    DropdownComponent,
    RadioComponent,
    FileComponent,
    AutocompleteComponent,
    DatepickerComponent,
    DatecomboComponent,
    ButtonComponent,
    InputComponent,
  ],
  exports: [
    DatagridComponent,
    CheckboxComponent,
    DropdownComponent,
    RadioComponent,
    FileComponent,
    AutocompleteComponent,
    DatepickerComponent,
    DatecomboComponent,
    ButtonComponent,
    InputComponent,
    FormComponent,
    ButtonbarComponent,
    PageComponent,
    DefaultMasterDetailPageComponent,
    DefaultListPageComponent,
    DefaultEditPageComponent
  ],
})
export class ComponentsModule { }
