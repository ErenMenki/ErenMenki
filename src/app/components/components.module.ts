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


@NgModule({
  declarations: [
    DatagridComponent,
    FormGeneratorComponent,
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
    ButtonbarComponent
  ],
  imports: [
    CommonModule,
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
    FormGeneratorComponent,
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
    ButtonbarComponent
  ],
})
export class ComponentsModule { }
