import { Component, Input, OnChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { FieldTypes } from '../../core/FieldTypes';
import { AgGridNg2 } from 'ag-grid-angular';
import { ColDef, IFilterComp, GridApi } from 'ag-grid-community';
import { AutoCompleteFilterComponent } from './datagrid.FilterAutoComplete';
import { TextFilterComponent } from './datagrid.FilterText';


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
  // tek basina icinde TL, USD gibi text olacak
  // ya da unitDataSource icin id alani
  unitField?: string;
  // sadece get_currencies ve get_units ile ve unitField ile beraber kullanilacak
  unitDataSource?: string;
  // symbol right / left verildi ise o alanlar
  // right ayni zamanda unit icin de kullanilabilir
  currencyRightField?: string;
  currencyLeftield?: string;
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
  sidebar = 'columns';
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

    if (this.options['locale'] === undefined) {
      this.options['locale'] = 'TR-tr';
    }
    // basliklari duzenle
    // eger baslik bir daha gelirse
    // ve eskisi ile ayni ise degistrime
    if (this._columns !== this.columns) {
      this._columns = this.columns;
      this.columnDefs = [];
      let i: number = 0;
      this._columns.forEach(col => {
        // sutunda bir params degiskeni lazimdi.
        // bu bos duruyor, dolayisiyla
        // diger degiskenleri de colStyles a  koyuyoruz
        const colStyles: [] = [];

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


        if (col.align !== undefined) {
          colStyles['text-align'] = col.align;
        }

        if (col.width !== undefined) {
          coldef.width = col.width;
          coldef.minWidth = col.width;
        }

        if (col.labelFunction !== undefined) {
          coldef.valueGetter = col.labelFunction;
        }

        if (this.options['hasSelectButton'] !== undefined &&
          this.options['hasSelectButton'] === true && i === 0) {
          coldef.checkboxSelection = true;
        }

        // ID alani
        if (col.dataType === FieldTypes.Id) {
          coldef.filter = 'agNumberColumnFilter';
          colStyles['text-align'] = 'right';

          // Numerik
        } else if (col.dataType === FieldTypes.Number) {
          coldef.filter = 'agNumberColumnFilter';
          colStyles['text-align'] = 'right';
          coldef.valueFormatter = this.numberFormatter;

          // Doviz
        } else if (col.dataType === FieldTypes.Currency) {
          coldef.filter = 'agNumberColumnFilter';
          colStyles['text-align'] = 'right';
          coldef.valueFormatter = this.currencyFormatter;
          // eger currency yada unit var ise bu alandan degiskeni alacagiz...
          if (col.unitField !== undefined) {
            colStyles['currencyField'] = col.unitField;
          } else if (col.unitDataSource !== undefined) {
            colStyles['currencyDataSource'] = col.unitDataSource;
          }

          // Birim
        } else if (col.dataType === FieldTypes.Unit) {
          coldef.filter = 'agNumberColumnFilter';
          colStyles['text-align'] = 'right';
          coldef.valueFormatter = this.unitFormatter;
          // eger currency yada unit var ise bu alandan degiskeni alacagiz...
          if (col.unitField !== undefined) {
            colStyles['unitField'] = col.unitField;
          } else if (col.unitDataSource !== undefined) {
            colStyles['unitDataSource'] = col.unitDataSource;
          }

          // Tarih
        } else if (col.dataType === FieldTypes.DatePicker) {
          coldef.filter = 'agDateColumnFilter';
          coldef.valueFormatter = this.dateFormatter;
          colStyles['text-align'] = 'right';

          // AutoComplete
        } else if (col.dataType === FieldTypes.DropDown ||
          col.dataType === FieldTypes.AutoComplete
        ) {
          coldef.filter = 'AutoCompleteFilter';
          if (col.filterDataSource !== undefined) {
            coldef.filterParams.filterDataSource = col.filterDataSource;
          } else {
            coldef.filterParams.filterDataSource = [];
          }

          // Text
        } else {
          coldef.filter = 'TextFilter'; // 'agTextColumnFilter';
        }


        coldef.cellStyle = Object.assign({}, colStyles);

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



  // public numberFormat(num: number) {
  //   return Intl.NumberFormat('tr-TR', {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(num);
  // }
  numberFormatter(params) {
    return Intl.NumberFormat(
      'tr-TR',
      { maximumFractionDigits: 2, minimumFractionDigits: 2 }
    ).format(params.value);
  }
  currencyFormatter(params) {
    let currencySymbolRight = '';
    let currencySymbolLeft = '';
    // get_currency
    if (params.colDef.cellStyle.currencyDataSource !== undefined) {
      params.colDef.cellStyle.currencyDataSource.forEach(c => {
        if (c.id === params.colDef.cellStyle.currencyField) {
          currencySymbolLeft = c.symbol_left;
          currencySymbolRight = c.symbol_right;
        }
      });
      // currencyRightField orn. customer_symbol_right  contractor_symbol_right
    } else if (params.colDef.cellStyle.currencyRightField !== undefined) {
      if (params.data[params.colDef.cellStyle.currencyRightField] !== undefined) {
        currencySymbolRight = params.data[params.colDef.cellStyle.currencyRightField];
      }
      // currencyLeftField orn. customer_symbol_left contractor_symbol_left
    } else if (params.colDef.cellStyle.currencyLeftField !== undefined) {
      if (params.data[params.colDef.cellStyle.currencyLeftField] !== undefined) {
        currencySymbolRight = params.data[params.colDef.cellStyle.currencyLeftField];
      }
      // TL USD vs
    } else if (params.colDef.cellStyle.currencyField !== undefined) {
      if (params.data[params.colDef.cellStyle.currencyField] !== undefined) {
        currencySymbolRight = params.data[params.colDef.cellStyle.currencyField];
      }
    }
    return currencySymbolLeft + ' ' +
      Intl.NumberFormat(
        'tr-TR',
        { maximumFractionDigits: 2, minimumFractionDigits: 2 }
      ).format(params.value) + ' ' + currencySymbolRight;
  }
  unitFormatter(params) {
    let unitName = '';
    // get_units
    if (params.colDef.cellStyle.unitDataSource !== undefined) {
      params.colDef.cellStyle.unitDataSource.forEach(c => {
        if (c.id === params.colDef.cellStyle.unitField) {
          unitName = c.symbol_right;
        }
      });
      // unit_name
    } else if (params.colDef.cellStyle.unitField !== undefined) {
      if (params.data[params.colDef.cellStyle.unitField] !== undefined) {
        unitName = params.data[params.colDef.cellStyle.unitField];
      }
    }
    return Intl.NumberFormat(
      'tr-TR',
      { maximumFractionDigits: 2, minimumFractionDigits: 2 }
    ).format(params.value) + ' ' + unitName;
  }
  dateFormatter(params) {
    const d: Date = new Date(params.value * 1000);
    return d.toLocaleDateString('tr-TR');
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
