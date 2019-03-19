export interface FormEvent {
  payload: object;
}

export interface FormItem {
  type: FormTypes;
  name: string;
  label?: string;
  value?: any;
  required?: boolean;
  options?: object[];
  validations?: FormValidator[];
}
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
  Radio = 'radio'
}

export interface FormValidator {
  name: string;
  validator: any;
  message: string;
}

export class TextboxFormItem implements FormItem {
  type = FormTypes.Input;
  name;
  label?;
  validations?;
  inputType;

  public constructor(init?: Partial<DropdownFormItem>) {
    Object.assign(this, init);
  }
}

export class ButtonFormItem implements FormItem {
  type = FormTypes.Input;
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
  type = FormTypes.DropDown;
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
  type = FormTypes.DropDown;
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
