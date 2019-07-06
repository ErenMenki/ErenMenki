import { Component, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
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
  selector: 'vias-datagrid2',
  templateUrl: './datagrid2.component.html',
  styleUrls: ['./datagrid2.component.scss']
})
export class DatagridComponent implements OnChanges {
  @Input() dataSource: object[];
  @Input() columns: DataGridColumn[];
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  matDataSource;
  cols: string[];

  fieldTypes = FieldTypes;


  selectedRowIndex: number = -1;
  selectedRowItem: object = {};

  constructor() { }

  ngOnChanges() {
    console.log(this.columns);
    console.log(this.dataSource);
    this.matDataSource = new MatTableDataSource(this.dataSource);
    this.matDataSource.paginator = this.paginator;
    this.matDataSource.sort = this.sort;
    this.cols = this.columns.map(c => c.dataField);
  }

  onDataChange($event) {
    const event: DataGridRefreshEvent = {
      pageNo: 1,
      sort: { column_name: 'id', sort_type: SortType.Ascending },
      filters: {}
    };

    this.refresh.emit(event);
  }
  rowClickHandler(index: number, row: object) {
    this.selectedRowIndex = index;
    this.selectedRowItem = row;
    const event: DataGridEvent = {
      index: this.selectedRowIndex,
      item: this.selectedRowItem,
    };
    this.rowClick.emit(event);
  }
  addClicked() {
    this.addClick.emit({});
  }
  editClicked() {
    if (this.selectedRowIndex > -1) {
      const event: DataGridEvent = {
        index: this.selectedRowIndex,
        item: this.selectedRowItem,
      };
      this.editClick.emit(event);
    }
  }
  deleteClicked() {
    if (this.selectedRowIndex > -1) {
      const event: DataGridEvent = {
        index: this.selectedRowIndex,
        item: this.selectedRowItem,
      };
      this.deleteClick.emit(event);
    }
  }
}
