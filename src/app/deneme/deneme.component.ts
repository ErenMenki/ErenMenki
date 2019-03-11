import { Component, OnInit } from '@angular/core';
import { DataGridRefreshEvent, DataGridColumn, SortObject, SortType } from 'src/app/components/datagrid/datagrid.component';
import { FormItem, TextboxFormItem, DropdownFormItem } from '../components/form-generator/form-item';
import { FormEvent } from '../components/form-generator/form-generator.component';

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

  formItems: FormItem<any>[];
  payLoad = '';

  constructor() { }

  ngOnInit() {
    this.createDGColumns();
    this.createForm();
  }

  onSubmit(event: FormEvent) {
    this.payLoad = JSON.stringify(event.data);
  }


  createForm() {
    this.formItems = [
      new TextboxFormItem({
        key: 'name',
        label: 'Ad soyad',
        value: 'Deneme adi',
        required: true
      }),
      new DropdownFormItem({
        key: 'school',
        label: 'Egitim Duzeyi',
        options: [
          { key: '1', value: 'Lise' },
          { key: '2', value: 'Universite' },
          { key: '3', value: 'Master' },
          { key: '4', value: 'Doktora' }
        ],
        order: 3
      }),
      new TextboxFormItem({
        key: 'email',
        label: 'Eposta Adresi',
        type: 'email'
      }),
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
