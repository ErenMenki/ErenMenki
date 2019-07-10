import { Component, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { FieldTypes } from '../../core/FieldTypes';
import { AgGridNg2 } from 'ag-grid-angular';
import { ColDef, IFilterComp, GridApi } from 'ag-grid-community';
import { AutoCompleteFilterComponent } from './datagrid.AutoCompleteFilter';
import { TextFilterComponent } from './datagrid.TextFilter';

export interface DataGridColumn {
  dataField: string;
  headerText?: string;
  align?: string;
  width?: number;
  widthPercent?: number;
  dataType?: FieldTypes;
  sortField?: string;
  filterField?: string;
  filterDataSource?: FilterOptions[];
  filterDataIdField?: string;
  filterDataLabelField?: string;
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
export interface FilterOptions {
  value: number;
  label: string;
}
export interface DataGridRefreshEvent {
  pageNo?: number;
  sort?: SortObject;
  filters?: { [prop: string]: any };
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
  @ViewChild('agGrid') agGrid: AgGridNg2;

  @Input() dataSource: object[];
  @Input() columns: DataGridColumn[];
  private _columns: DataGridColumn[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() options: {} = {};
  @Input() dgButtons: { hasAddBtn: boolean, hasEditBtn: boolean, hasDeleteBtn: boolean } = {
    hasAddBtn: true, hasEditBtn: true, hasDeleteBtn: true
  };
  @Output() refresh: EventEmitter<DataGridRefreshEvent> = new EventEmitter<DataGridRefreshEvent>();
  @Output() rowClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();
  @Output() addClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();
  @Output() editClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();
  @Output() deleteClick: EventEmitter<DataGridEvent> = new EventEmitter<DataGridEvent>();

  private gridApi;
  private gridColumnApi;
  selectedRowIndex: number = -1;
  selectedRowItem: object = {};
  sort: SortObject = { column_name: 'id', sort_type: SortType.Descending };
  filterModel: {};
  columnDefs = [];
  rowselection;
  frameworkComponents;
  multipleRowSelection;
  constructor() {

    this.frameworkComponents = {
      AutoCompleteFilter: AutoCompleteFilterComponent,
      TextFilter: TextFilterComponent
    };
  }


  ngOnChanges() {
    this.rowselection = 'single';
    if (this.options['multipleRowSelection'] !== undefined &&
      this.options['multipleRowSelection'] === true) {
      this.multipleRowSelection = 'multiple';
    }

    if (this.options['sortObj'] !== undefined) {
      this.sort = this.options['sortObj'];
    }
    // basliklari duzenle
    // eger baslik bir daha gelirse
    // ve eskisi ile ayni ise degistrime
    if (this._columns !== this.columns) {
      this._columns = this.columns;
      this.columnDefs = [];
      let i: number = 0;
      this._columns.forEach(col => {
        const coldef: ColDef = {
          headerName: col.headerText,
          field: col.dataField,
          sortable: true,
          resizable: true,
          filterParams: {
            filterField: col.filterField,
            filterDataIdField: col.filterDataIdField,
            filterDataLabelField: col.filterDataLabelField,
            filterDataSource: []
          }
        };

        if (this.options['hasSelectButton'] !== undefined &&
          this.options['hasSelectButton'] === true && i === 0) {
          coldef.checkboxSelection = true;
        }
        if (col.dataType === FieldTypes.Number) {
          coldef.filter = 'agNumberColumnFilter';
        } else if (col.dataType === FieldTypes.DatePicker) {
          coldef.filter = 'agDateColumnFilter';
        } else if (col.dataType === FieldTypes.DropDown) {
          coldef.filter = 'AutoCompleteFilter';
          if (col.filterDataSource !== undefined) {
            coldef.filterParams.filterDataSource = col.filterDataSource;
          } else {
            coldef.filterParams.filterDataSource = [];
          }
          // coldef.filterParams = col.filterDataSource;
          // [
          //   { value: 0, label: 'Seciniz' } as FilterOptions,
          //   { value: 1, label: 'ali' } as FilterOptions,
          //   { value: 2, label: 'veli' } as FilterOptions,
          // ];
        } else {
          coldef.filter = 'TextFilter'; // 'agTextColumnFilter';
        }
        i++;
        this.columnDefs.push(coldef);
      });
    }

  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onGridSort(event) {
    // event.stopPropagation();
    // event.preventDefault();
    this.prepareRefreshEvent(event.api);
  }
  onGridFilter(event) {
    this.prepareRefreshEvent(event.api);
  }
  prepareRefreshEvent(api: GridApi) {
    const sortModel: {
      colId: string;
      sort: string;
    }[] = api.getSortModel();
    sortModel.forEach(o => {
      const colDef = api.getColumnDef(o.colId);
      // sort field alani bul
      this.sort.column_name = this._columns.find(x => x.dataField === colDef.field).sortField;
      this.sort.sort_type = o.sort === 'asc' ? SortType.Ascending : SortType.Descending;
    });

    this.filterModel = this.parseFilter(api);

    // 1. sayfaya don
    const e: DataGridRefreshEvent = {
      pageNo: 1,
      sort: this.sort,
      filters: this.filterModel
    };

    this.refresh.emit(e);
  }

  private parseFilter(api: GridApi): object {
    const filters: {} = api.getFilterModel();
    const filter: {} = {};
    // tslint:disable-next-line: forin
    for (const key in filters) {
      const colDef = api.getColumnDef(key);
      // veritabanina gonderilecek filter alan adi
      const filterKey: string = colDef.filterParams.filterField;
      const filterObj: {
        type: string;
        filter: string;
        filterType: string;
      } = filters[key];
      if (filterObj.filterType === 'text') {
        filter[filterKey] = filters[key].filter;
      } else if (filterObj.filterType === 'number') {
        filter[filterKey] = filters[key].filter;
      } else if (filterObj.filterType === 'date') {
        filter[filterKey] = {
          first_date: new Date(filters[key].dateFrom).getTime() / 1000,
          last_date: new Date(filters[key].dateTo).getTime() / 1000,
          date_distance: 0
        };
      } else {
        filter[filterKey] = filters[key].value;
      }
    }


    return filter;
  }


  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    let selectedRowsString: string = '';
    selectedRows.forEach(function (selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ', ';
      }
      selectedRowsString += selectedRow.athlete;
    });
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
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
  onGridSizeChanged(params) {
    // const gridWidth = document.getElementById('dg-container').offsetWidth;
    // const columnsToShow = [];
    // const columnsToHide = [];
    // let totalColsWidth = 0;
    // const allColumns = params.columnApi.getAllColumns();
    // for (let i = 0; i < allColumns.length; i++) {
    //   const column = allColumns[i];
    //   totalColsWidth += column.getMinWidth();
    //   if (totalColsWidth > gridWidth) {
    //     columnsToHide.push(column.colId);
    //   } else {
    //     columnsToShow.push(column.colId);
    //   }
    // }
    // params.columnApi.setColumnsVisible(columnsToShow, true);
    // params.columnApi.setColumnsVisible(columnsToHide, false);
    // params.api.sizeColumnsToFit();
  }

  // getSelectedRows() {
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map(node => node.data);
  //   const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }

}
