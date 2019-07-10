import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageMeta, ResponseField, ResponseFieldDataSourceType } from 'src/app/core/services/page-meta.service';
import { DataGridEvent } from '../datagrid2/datagrid2.component';

@Component({
  selector: 'vias-default-list-page',
  templateUrl: '../page/page.component.html',
  styleUrls: ['../page/page.component.scss']
})
export class DefaultListPageComponent extends PageComponent {
  constructor(
    protected storage: StorageService,
    protected globals: GlobalsService,
    protected viasService: ViasConnectionService,
    protected next: ActivatedRoute,
    protected route: Router
  ) {
    super(storage, globals, viasService, next, route);
    this.hasDatagrid = true;
    this.hasEditForm = false;
  }

  generatePageFromMeta(pageMeta: PageMeta) {
    super.generatePageFromMeta(pageMeta);
    this.aid = pageMeta.listAid;
    this.hasButtonbar = pageMeta.hasButtonBarInList;
    this.dgButtons = {
      hasAddBtn: pageMeta.datagridHasAddBtn,
      hasEditBtn: pageMeta.datagridHasEditBtn,
      hasDeleteBtn: pageMeta.datagridHasDeleteBtn
    };
    if (pageMeta.dataGridInitialSort) {
      this.sortObj = pageMeta.dataGridInitialSort;
    }
    pageMeta.dataGridColumns.forEach(col => {
      if (col.filterDataIdField === null) {
        col.filterDataIdField = 'id';
      }
      if (col.filterDataLabelField === null) {
        col.filterDataLabelField = 'name';
      }
      if (col.filterField === null) {
        col.filterField = col.dataField;
      }
      if (col.sortField === null) {
        col.sortField = col.dataField;
      }
    });
    console.log(pageMeta);
    this.refreshData();
  }

  viasServiceHandler(r: ViasResponse) {
    console.log(r);
    console.log('------cevap geldi');
    if (r.data) {
      this.pageMeta.responseFields.forEach(rf => {
        if (rf.responseFieldType === ResponseFieldDataSourceType.datagridDataSource) {
          this.dataSource = r.data[rf.fieldName];
        } else if (rf.responseFieldType === ResponseFieldDataSourceType.datagridFilterDataSource) {
          this.pageMeta.dataGridColumns.forEach(col => {
            if (col.filterField === rf.componentName) {
              col.filterDataSource = r.data[rf.fieldName];
            }
          });
        }
      });

      if (r.data[this.pageMeta.pageTotalsField]) {
        this.totalPages = r.data[this.pageMeta.pageTotalsField];
      }
      if (r.data[this.pageMeta.pageNoField]) {
        this.totalPages = r.data[this.pageMeta.pageNoField];
      }
    }
  }


  datagridAddBtnClickHandler?(event: DataGridEvent) {
    console.log(this.pageMeta.editPageName);
    this.route.navigate(['/' + this.moduleName + '/' + this.pageMeta.editPageName]);
  }
}
