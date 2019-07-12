import { Component, OnInit, Input, Output, OnDestroy, OnChanges } from '@angular/core';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';
import { DataGridColumn, SortObject, SortType, DataGridRefreshEvent, DataGridEvent } from '../datagrid/datagrid.component';
import { FormItem, FormEvent } from '../form/FormItem';
import { ButtonBarItem } from '../buttonbar/buttonbar.component';
import { PageMeta, PageMetaService } from 'src/app/core/services/page-meta.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'vias-page',
  template: '',
})
export class PageComponent implements OnInit, OnDestroy, OnChanges {
  // Gerekli Bilgiler
  pageName: string = '';
  moduleName: string = '';
  pageTitle: string = '';
  pid: number = 0;
  aid: number = 0;

  // Sayfa Settings
  hasDatagrid: boolean = true;
  hasButtonbar: boolean = true;
  hasEditForm: boolean = true;

  // Datagrid
  columns: DataGridColumn[] = [];
  dataSource: object[] = [];
  sortObj: SortObject = { column_name: 'id', sort_type: SortType.Descending };
  pageno: number = 1;
  totalPages: number = 1;
  filtersObj: object = {};
  dgButtons: { hasAddBtn: boolean, hasEditBtn: boolean, hasDeleteBtn: boolean } = {
    hasAddBtn: true, hasEditBtn: true, hasDeleteBtn: true
  };
  datagridOptions: {} = {};

  // Buttonbar
  buttonBarItems: ButtonBarItem[] = [];

  pageMeta: PageMeta;

  // Form
  formItems: FormItem[] = [];

  constructor(
    protected storage: StorageService,
    protected globals: GlobalsService,
    protected viasService: ViasConnectionService,
    protected next: ActivatedRoute,
    protected route: Router
  ) { }

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.next.snapshot;
    if (snapshot.data.pageName != null) {
      this.pageName = snapshot.data.pageName;
    }
    if (snapshot.data.moduleName != null) {
      this.moduleName = snapshot.data.moduleName;
    }
    // console.log(this.moduleName);
    if (this.moduleName.length > 0 && this.pageName.length > 0) {
      const pms: PageMetaService = new PageMetaService();
      pms.getPage(this.moduleName, this.pageName).then(
        metaData => {
          console.log(metaData);
          this.generatePageFromMeta(metaData);
        }
      );
    }
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
  }


  generatePageFromMeta(pageMeta: PageMeta) {
    this.datagridOptions['sortObj'] = this.sortObj;
    // bunlar alt siniflara ovverride edilen yere tasinmali!!!
    // this.columns = pageMeta.dataGridColumns;
    // this.formItems = pageMeta.formItems;
    this.pid = pageMeta.pid;
    this.pageMeta = pageMeta;
  }

  /**
   * Datagrid sort, sayfa degisim ve filtre durumunun handler methodu
   * @param $event DataGridRefreshEvent
   */
  datagridRefreshHandler($event: DataGridRefreshEvent) {
    this.sortObj = $event.sort;
    this.datagridOptions['sortObj'] = this.sortObj;
    this.pageno = $event.pageNo;
    this.filtersObj = $event.filters;
    console.log($event);
    this.refreshData();
  }

  /**
   * Button bar tiklaninca methoda gonderen handler
   * @param $event Buttonbar event
   */
  butonclickHandler($event: ButtonBarItem) {
    if (this[$event.onClick]) {
      this[$event.onClick]($event);
    }
  }

  formItemChangeOption(itemName: string, data: object[]) {
    const index = this.formItems.findIndex(e => e['name'] === itemName);
    this.formItems[index].options = data;
  }

  /**
   * Form submit edilince calisan handler method
   * @param $event FormEvent
   */
  formSubmitHandler($event: FormEvent) {

  }

  /**
   * viasService call with pid aid
   * standart listeleme icin
   * handle promise response
   * no need o
   */
  refreshData() {
    const sendData: object = {
      sort: this.sortObj,
      page_no: this.pageno,
      filters: this.filtersObj
    };
    this.viasService.send(this.pid, this.aid, sendData).then(
      response => {
        this.viasServiceHandler(response);
      },
      err => {
        alert(err);
        console.log(err);
      });
  }

  /**
   * viasService icin Handler
   * OVERRIDE
   * standart listeleme sonucu
  */
  viasServiceHandler(r: ViasResponse) {
  }

  /**
   * Datagrid tek tiklaninca calisan method
   * @param index selected item index
   * @param item DataGridColumn
   */
  // datagridClickHandler?(index: number, item: DataGridColumn);
  datagridClickHandler?(event: DataGridEvent) {
    // console.log(event.item);
  }
  datagridAddBtnClickHandler?(event: DataGridEvent) {
    // this.route.navigate('');
  }
  datagridEditBtnClickHandler?(event: DataGridEvent) {
    console.log(event.item);
  }
  datagridDeleteBtnClickHandler?(event: DataGridEvent) {
    console.log(event.item);
  }
  /**
   * Datagrid cift tiklaninca calisan method
   * @param index selected item index
   * @param item DataGridColumn
   */
  datagridDoubleClickHandler?(index: number, item: DataGridColumn);
  /**
   * Edit isleminden once calisan method
   * @param index selected item index
   * @param item DataGridColumn before edit
   */
  datagridItemEditBeginHandler?(index: number, item: DataGridColumn);
  /**
   * Edit isleminden sonra calisan method
   * @param index selected item index
   * @param item DataGridColumn after edit
   */
  datagridItemEditendHandler?(index: number, item: DataGridColumn);
}
