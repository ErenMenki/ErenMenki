import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageMeta, ResponseField, ResponseFieldDataSourceType } from 'src/app/core/services/page-meta.service';
import { DataGridEvent } from '../datagrid/datagrid.component';
import { FilterOptions, DataGridColumn } from '../datagrid/datagrid.component';

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
    // parent cagir
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

    console.log(pageMeta);
    this.refreshData();
  }

  viasServiceHandler(r: ViasResponse) {
    super.viasServiceHandler(r);
    if (r.data) {
      const resp = this.responseFieldParserForDataGrid(
        r.data,
        this.pageMeta.responseFields,
        this.pageMeta.dataGridColumns
      );
      this.dataSource = resp.dataSource;
      this.columns = resp.dataGridColumns;
      // this.pageMeta.responseFields.forEach(rf => {
      //   if (rf.responseFieldType === ResponseFieldDataSourceType.datagridDataSource) {
      //     if (r.data[rf.fieldName] !== undefined) {
      //       this.dataSource = r.data[rf.fieldName];
      //     }
      //   } else if (rf.responseFieldType === ResponseFieldDataSourceType.datagridFilterDataSource) {
      //     // colonu bul
      //     const colInd: number = this.pageMeta.dataGridColumns.findIndex(
      //       x => x.filterField === rf.componentName
      //     );
      //     const col: DataGridColumn = this.pageMeta.dataGridColumns[colInd];
      //     // seciniz ekle
      //     col.filterDataSource = [{ value: 0, label: 'Seçiniz' } as FilterOptions];
      //     // digerlerini ekle
      //     r.data[rf.fieldName].forEach(obj => {
      //       col.filterDataSource.push({
      //         value: obj[col.filterDataIdField],
      //         label: obj[col.filterDataLabelField]
      //       });
      //     });
      //     // changed lifecyle icin
      //     // kolonu geri yaz
      //     this.pageMeta.dataGridColumns.splice(colInd, 1, col);
      //   }
      // });

      if (r.data[this.pageMeta.pageTotalsField] !== undefined) {
        this.totalPages = r.data[this.pageMeta.pageTotalsField];
      }
      if (r.data[this.pageMeta.pageNoField] !== undefined) {
        this.pageno = r.data[this.pageMeta.pageNoField];
      }

      // islem bitti colonlari gonder
      this.columns = this.pageMeta.dataGridColumns;
    }
  }


  datagridAddBtnClickHandler?(event: DataGridEvent) {
    console.log(this.pageMeta.editPageName);
    this.route.navigate(['/' + this.moduleName + '/' + this.pageMeta.editPageName]);
  }
}
