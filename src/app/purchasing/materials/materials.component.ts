import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';
import { DataGridRefreshEvent, DataGridColumn, SortObject, SortType } from 'src/app/components/datagrid/datagrid.component';
import { FieldTypes } from 'src/app/core/FieldTypes';

@Component({
  selector: 'vias-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  title = 'Stok';
  columns: DataGridColumn[] = [];
  dataSource: object[] = [];
  sortObj: SortObject = { column_name: 'id', sort_type: SortType.Ascending };
  pageno: number = 1;
  totalPages: number = 1;
  filtersObj: object = {};

  project_detail_id: number = 0;
  contractor_id: number = 0;

  materials: Array<object> = [];

  constructor(public globals: GlobalsService, private viasService: ViasConnectionService) { }

  ngOnInit() {
    this.createDGColumns();
    this.refreshData();
  }


  refreshData() {
    const sendData: object = {
      sort: this.sortObj,
      page_no: this.pageno,
      filters: this.filtersObj
    };
    this.viasService.send(2000, 0, sendData).then(response => {
      this.serviceHandler(response);
    },
      err => {
        alert(err);
      });
  }
  serviceHandler(r: ViasResponse) {
    if (r.data) {
      console.log(r.data);
      if (r.data['materials']) {
        this.dataSource = r.data['materials'];
      }
      if (r.data['total_page']) {
        this.totalPages = r.data['total_page'];
      }
      if (r.data['page_no']) {
        this.pageno = r.data['page_no'];
      }
    }
  }

  onRefresh(event: DataGridRefreshEvent) {
    console.log(event);
  }


  createDGColumns() {
    this.columns = [
      {
        dataField: 'code',
        headerText: 'Malzeme Kodu',
        width: 100,
        align: 'right',
        footerData: 'deneme footer'
      },
      {
        dataField: 'name',
        headerText: 'Malzeme Tanımı',
        widthPercent: 50,
        align: 'left'
      },
      {
        dataField: 'main_group_name',
        headerText: 'Ana Grubu',
        dataType: FieldTypes.Text
      },
      {
        dataField: 'group_name',
        headerText: 'Grubu',
        dataType: FieldTypes.Text
      },
      {
        dataField: 'purchase_unit_name',
        headerText: 'S.Alma Birimi',
        dataType: FieldTypes.Text
      },
      {
        dataField: 'min_stock',
        headerText: 'Min Stok',
        dataType: FieldTypes.Number
      },
      {
        dataField: 'max_stock',
        headerText: 'Maks Stok',
        dataType: FieldTypes.Number
      },
    ];
  }
}
