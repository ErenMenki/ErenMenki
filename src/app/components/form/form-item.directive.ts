import { Directive, ComponentFactoryResolver, ViewContainerRef, OnInit, Input } from '@angular/core';
import { FormItem } from './FormItem';
import { FieldTypes } from '../../core/FieldTypes';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { InputComponent } from '../input/input.component';
import { RadioComponent } from '../radio/radio.component';
import { FormGroup } from '@angular/forms';

const fieldMatcher = {
  autocomplete: AutocompleteComponent,
  button: ButtonComponent,
  checkbox: CheckboxComponent,
  datepicker: DatepickerComponent,
  combobox: DropdownComponent,
  dropdown: DropdownComponent,
  text: InputComponent,
  number: InputComponent,
  email: InputComponent,
  password: InputComponent,
  radio: RadioComponent,
};

@Directive({
  selector: '[viasFormItem]'
})
export class FormItemDirective implements OnInit {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(fieldMatcher[ this.item.type ]);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.item = this.item;
    this.componentRef.instance.form = this.form;
  }
}
