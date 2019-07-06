import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { FormItem } from '../form/FormItem';
import { FieldTypes } from "../../core/FieldTypes";
import { FormGroup, } from '@angular/forms';

@Component({
  selector: 'vias-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  inputType: string;
  constructor() { }
  ngOnInit() { }
  ngOnChanges() {
    switch (this.item.type) {
      case FieldTypes.Number:
        this.inputType = 'number';
        break;
      case FieldTypes.Email:
        this.inputType = 'email';
        break;
      case FieldTypes.Password:
        this.inputType = 'password';
        break;
      case FieldTypes.Input:
      case FieldTypes.Text:
      default:
        this.inputType = 'text';
        break;
      }
    }
}
