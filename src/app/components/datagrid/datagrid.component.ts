import { Component, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export class DataGridColumn {
  dataField: string;
  headerText?: string;
  align?: string = 'center';
  width?: number;
  widthPercent?: number;
  dataType?: string = 'text';
  labelFunction?: any;
  currencyField?: string;
  footerData?: any;
  editable?: boolean = false;
  sticky?: boolean = false;
}
export enum SortType {
  Ascending = 'asc',
  Descending = 'desc'
}
export class SortObject {
  column_name: string = '';
  sort_type: SortType = SortType.Ascending;
}
export class DataGridRefreshEvent {
  pageNo?: number = 1;
  sort?: SortObject = { column_name: 'id', sort_type: SortType.Ascending };
  filters?: { [prop: string]: any[] } = {};
}

@Component({
  selector: 'vias-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnChanges {
  @Input() dataSource: object[];
  @Input() columns: DataGridColumn[];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() refresh: EventEmitter<DataGridRefreshEvent> = new EventEmitter<DataGridRefreshEvent>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  matDataSource;
  cols: string[];

  constructor() { }

  ngOnChanges() {
    console.log(this.columns);
    console.log(this.dataSource);
    this.matDataSource  = new MatTableDataSource(this.dataSource);
    this.matDataSource.paginator = this.paginator;
    this.matDataSource.sort = this.sort;
    this.cols = this.columns.map(c => c.dataField);
  }
}

