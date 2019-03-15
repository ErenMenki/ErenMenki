import { Component, OnInit, Input, Output } from '@angular/core';
import { FormItem, FormTypes } from '../form/form.component';
import { FormGroup, } from '@angular/forms';

@Component({
  selector: 'vias-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  inputType: string;
  constructor() {
  }
  ngOnInit() {
    switch (this.item.type) {
      case FormTypes.Number:
        this.inputType = 'number';
        break;
      case FormTypes.Email:
        this.inputType = 'email';
        break;
      case FormTypes.Password:
        this.inputType = 'password';
        break;
      case FormTypes.Input:
      case FormTypes.Text:
      default:
        this.inputType = 'text';
        break;
      }
    }
}
