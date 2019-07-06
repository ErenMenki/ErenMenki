import { FieldTypes } from '../../core/FieldTypes';

export interface FormEvent {
  payload: object;
}

export interface FormItem {
  type: FieldTypes;
  name: string;
  label?: string;
  value?: any;
  required?: boolean;
  options?: object[];
  validations?: FormValidator[];
}
export interface FormValidator {
  name: string;
  validator: any;
  message: string;
}

export class TextboxFormItem implements FormItem {
  type = FieldTypes.Input;
  name;
  label?;
  validations?;
  inputType;

  public constructor(init?: Partial<DropdownFormItem>) {
    Object.assign(this, init);
  }
}

export class ButtonFormItem implements FormItem {
  type = FieldTypes.Input;
  name;
  label?;
  validations?;
  buttonColor;
  buttonType;

  public constructor(init?: Partial<DropdownFormItem>) {
    Object.assign(this, init);
  }
}

export class DropdownFormItem implements FormItem {
  type = FieldTypes.DropDown;
  name;
  label?;
  validations?;
  options?: { label: string, data: string }[] = [];
  /**
   * eger options belli degil ise,
   * bu method base de cagrilacak.
   * Bu sadece init olurken calisacak.
   */
  optionInitFunction?: string;

  public constructor(init?: Partial<DropdownFormItem>) {
    Object.assign(this, init);
  }
}

export class AutoCompleteFormItem implements FormItem {
  type = FieldTypes.DropDown;
  name;
  label?;
  validations?;
  options?: { label: string, data: string }[] = [];
  /**
   * eger options belli degil ise,
   * bu method base de cagrilacak.
   * Bu sadece init olurken calisacak.
   */
  optionInitFunction?: string;

  public constructor(init?: Partial<DropdownFormItem>) {
    Object.assign(this, init);
  }
}
