import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItem } from './form-item';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  toFormGroup(formItems: FormItem<any>[]) {
    let group: any = {};

    formItems.forEach(formItem => {
      group[formItem.key] = new FormControl(
        formItem.value || '',
        formItem.required ? Validators.required : null
      );
    });
    return new FormGroup(group);
  }
}
