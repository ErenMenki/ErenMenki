import { Component, OnInit } from '@angular/core';
import { DataGridRefreshEvent, DataGridColumn, SortObject, SortType } from 'src/app/components/datagrid/datagrid.component';
import { FormItem, FormTypes } from '../components/form/form.component';
import { Validators } from '@angular/forms';
import { ButtonBarItem, ButtonColors } from '../components/buttonbar/buttonbar.component';
// import { FormItem, TextboxFormItem, DropdownFormItem } from '../components/form-generator/form-item';
// import { FormEvent } from '../components/form-generator/form-generator.component';

@Component({
  selector: 'vias-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss']
})
export class DenemeComponent implements OnInit {
  dataSource: object[] = [
    { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  title = 'Deneme';
  columns: DataGridColumn[] = [];
  sortObj: SortObject = { column_name: 'id', sort_type: SortType.Ascending };
  pageno: number = 1;
  totalPages: number = 1;
  filtersObj: object = {};

  formItems: FormItem[];
  // formItems: FormItem<any>[];
  payLoad = '';
  butonBilgileri = '';

  buttonBarItems: ButtonBarItem[];

  constructor() { }

  ngOnInit() {
    this.createDGColumns();
    this.createForm();
    this.createButtonBar();
  }

  // onSubmit(event: FormEvent) {
  //   this.payLoad = JSON.stringify(event.data);
  // }
  createButtonBar() {
    this.buttonBarItems = [
      {
        label: 'Button 1',
        name: 'button1',
        icon: 'person',
        onClick: 'buton1clickHandler'
      },
      {
        label: 'Button 2',
        name: 'button2',
        color: ButtonColors.Primary,
        onClick: 'gitVeritabaninaBaglan'
      },
      {
        label: 'Button 3',
        name: 'button3',
        color: ButtonColors.Accent
      },
      {
        label: 'Button 4',
        name: 'button4',
        color: ButtonColors.Disabled
      },
    ];
  }

  gitVeritabaninaBaglan(item: ButtonBarItem) {
    this.butonBilgileri += item.label + ' isimli butona tiklandi haa ona gore';
  }

  buton1clickHandler(item: ButtonBarItem){
    this.butonBilgileri += item.label + ' isimli butona tiklandi';
  }

  butonclickHandler(item: ButtonBarItem) {
    if(this[item.onClick]){
      this[item.onClick](item);
    }
    // console.log('butona tiklandi');
    // console.log($event);
    // this.butonBilgileri += $event + ' idli butona tiklandi';
  }

  createForm() {
    this.formItems = [
      {
        type: FormTypes.Text,
        label: 'Ad Soyad',
        name: 'namesurname',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Ad soyad lazim bize'
          },
          {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Zort Sadece text girebilirsin. rakam olmaz'
          }
        ]
      },
      {
        type: FormTypes.Email,
        label: 'Eposta ',
        name: 'email',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Girin emaili rahat edin'
          },
          {
            name: 'pattern',
            validator: Validators.pattern(
              '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
            ),
            message: 'duzgun email girin '
          }
        ]
      },
      {
        type: FormTypes.Password,
        label: 'Sifreniz',
        name: 'password',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Sifrenizi girin lo'
          }
        ]
      },
      {
        type: FormTypes.DatePicker,
        label: 'Tarih',
        name: 'date_created'
      },
      {
        type: FormTypes.DropDown,
        label: 'zort zort',
        name: 'dropzort',
        options: [
          { data: 1, label: 'asdad1' },
          { data: 2, label: 'asdad2' },
          { data: 3, label: 'asdad3' },
          { data: 4, label: 'asdad4' },
        ]
      },
      {
        type: FormTypes.AutoComplete,
        label: 'zort zort2',
        name: 'dropzort2',
        options: [
          { data: 1, label: 'sari' },
          { data: 2, label: 'mavi' },
          { data: 3, label: 'kirmizi' },
          { data: 4, label: 'yesil' },
        ]
      },
      {
        type: FormTypes.Radio,
        label: 'Cinsiyet',
        name: 'gender',
        options: [
          { data: 1, label: 'male' },
          { data: 2, label: 'female' },
        ]
      },
      {
        type: FormTypes.Radio,
        label: 'Medeni Hal',
        name: 'zoafdsad',
        options: [
          { data: 1, label: 'evli' },
          { data: 2, label: 'bekar' },
        ]
      },
      {
        type: FormTypes.CheckBox,
        label: 'Kabul ediyor musunuz ? ',
        name: 'zoafdsasdsd',
      },
      {
        type: FormTypes.Button,
        name: 'button1',
        label: 'Button1'
      }



      // new TextboxFormItem({
      //   key: 'name',
      //   label: 'Ad soyad',
      //   value: 'Deneme adi',
      //   required: true
      // }),
      // new DropdownFormItem({
      //   key: 'school',
      //   label: 'Egitim Duzeyi',
      //   options: [
      //     { key: '1', value: 'Lise' },
      //     { key: '2', value: 'Universite' },
      //     { key: '3', value: 'Master' },
      //     { key: '4', value: 'Doktora' }
      //   ],
      //   order: 3
      // }),
      // new TextboxFormItem({
      //   key: 'email',
      //   label: 'Eposta Adresi',
      //   type: 'email'
      // }),
    ];
  }

  createDGColumns() {
    this.columns = [
      {
        dataField: 'id',
        headerText: 'Id',
        width: 100,
        align: 'right',
        footerData: 'deneme footer',
        sticky: true
      },
      {
        dataField: 'name',
        headerText: 'Tanımı',
        widthPercent: 50,
        align: 'left',
        editable: true
      },
      {
        dataField: 'weight',
        headerText: 'Agirlik',
        dataType: 'date'
      },
      {
        dataField: 'symbol',
        headerText: 'Sembol',
        dataType: 'date'
      },
    ];
  }
}
