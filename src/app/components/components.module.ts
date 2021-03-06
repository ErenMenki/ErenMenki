import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

// Angular AG Grid
import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteFilterComponent } from './datagrid/datagrid.FilterAutoComplete';
import { TextFilterComponent } from './datagrid/datagrid.FilterText';

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
  MatIconModule,
  MatGridListModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
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
import { OnlyNumericDirective } from './directives/only-numeric.directive';
import { NumericFilterComponent } from './datagrid/datagrid.FilterNumeric';
import { DateFilterComponent } from './datagrid/datagrid.FilterDate';
import { DropDownFilterComponent } from './datagrid/datagrid.FilterDropdown';

@NgModule({
  declarations: [
    DatagridComponent,
    AutoCompleteFilterComponent,
    DropDownFilterComponent,
    TextFilterComponent,
    DateFilterComponent,
    NumericFilterComponent,
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
    DefaultEditPageComponent,
    OnlyNumericDirective,
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      AutoCompleteFilterComponent,
      DropDownFilterComponent,
      TextFilterComponent,
      NumericFilterComponent,
      DateFilterComponent,
    ]),
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
    MatMomentDateModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatIconModule,
    MatGridListModule,
  ],
  entryComponents: [
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
