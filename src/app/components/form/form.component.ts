import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export enum FormTypes {
  AutoComplete = 'autocomplete',
  Button = 'button',
  CheckBox = 'checkbox',
  DataGrid = 'datagrid',
  DatePicker = 'datepicker',
  DateCombo = 'datepicker',
  ComboBox = 'dropdown',
  DropDown = 'dropdown',
  File = 'file',
  Input = 'text',
  Text = 'text',
  Email = 'email',
  Number = 'number',
  Password = 'password',
  Radio = 'radio',
}

export interface FormValidator {
  name: string;
  validator: any;
  message: string;
}

export interface FormItem {
  type: FormTypes;
  name: string;
  label?: string;
  value?: any;
  required?: boolean;
  options?: object[];
  collections?: any;
  validations?: FormValidator[];
}

@Component({
  selector: 'vias-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formItems: FormItem[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
  }

  get value() {
    return this.form.value;
  }

  createControl() {
    const group = this.fb.group({});
    this.formItems.forEach(item => {
      if (item.type === 'button') {
        return;
      }
      const control = this.fb.control(
        item.value,
        this.bindValidations(item.validations || [])
      );
      group.addControl(item.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
