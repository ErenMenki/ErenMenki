import { Component, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { FieldTypes } from '../../core/FieldTypes';

export interface DataGridColumn {
  dataField: string;
  headerText?: string;
  align?: string;
  width?: number;
  widthPercent?: number;
  dataType?: FieldTypes;
  filterDataSource?: object[];
  labelFunction?: any;
  currencyField?: string;
  footerData?: any;
  editable?: boolean;
  sticky?: boolean;
}
export enum SortType {
  Ascending = 'asc',
  Descending = 'desc'
}
export interface SortObject {
  column_name: string;
  sort_type: SortType;
}
export interface DataGridRefreshEvent {
  pageNo?: number;
  sort?: SortObject;
  filters?: { [prop: string]: any[] };
}
export interface DataGridEvent {
  index?: number;
  item?: object;
}
@Component({
  selector: 'vias-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnChanges {
  @Input() dataSource: object[];
  @Input() columns: DataGridColumn[];
  private _columns: DataGridColumn[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() dgButtons: { hasAddBtn: boolean, hasEditBtn: boolean, hasDeleteBtn: boolean } = {
    hasAddBtn: true, hasEditBtn: true, hasDeleteBtn: true
  };
  @Output() refresh: EventEmitter<DataGridRefreshEvent> = new EventEmitter<DataGridRefreshEvent>();
  @Output() rowClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();
  @Output() addClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();
  @Output() editClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();
  @Output() deleteClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();

  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', checkboxSelection: true },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor() { }

  ngOnChanges() {
    // basliklari duzenle
    // eger baslik bir daha gelirse
    // ve eskisi ile ayni ise  degistrime
    if (this._columns !== this.columns) {
      this._columns = this.columns;
      this.columnDefs = [];
      this.columnDefs.push(
        {
          headerName: 'Seçiniz',
          field: 'id',
          checkboxSelection: true
        }
      );
      this._columns.forEach(col => {
        this.columnDefs.push(
          {
            headerName: col.headerText,
            field: col.dataField,
            sortable: true,
            filter: true,
          }
        );
      });
    }

  }

}
