import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';
import { DataGridColumn, SortObject, SortType, DataGridRefreshEvent } from '../datagrid/datagrid.component';
import { FormItem, FormEvent } from '../form/FormItem';
import { ButtonBarItem } from '../buttonbar/buttonbar.component';
import { PageMeta, PageMetaService } from 'src/app/core/services/page-meta.service';

@Component({
  selector: 'vias-page',
  template: '',
})
export class PageComponent implements OnInit, OnDestroy {
  // Gerekli Bilgiler
  pageMeta: string = '';
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
  sortObj: SortObject = { column_name: 'id', sort_type: SortType.Ascending };
  pageno: number = 1;
  totalPages: number = 1;
  filtersObj: object = {};

  // Buttonbar
  buttonBarItems: ButtonBarItem[];


  // Form
  formItems: FormItem[];

  constructor(protected globals: GlobalsService, protected viasService: ViasConnectionService) { }

  ngOnInit() {
    if (this.pageMeta.length > 0 && this.pageMeta.indexOf('/') >= 0) {
      const pms: PageMetaService = new PageMetaService();
      const pageMeta: PageMeta = pms.getPage(this.pageMeta);
      this.generatePageFromMeta(pageMeta);
    }
  }


  ngOnDestroy() {
  }


  generatePageFromMeta(pageMeta: PageMeta) {
    this.columns = pageMeta.dataGridColumns;
    this.formItems = pageMeta.FormItems;
  }

  /**
   * Datagrid sort, sayfa degisim ve filtre durumunun handler methodu
   * @param $event DataGridRefreshEvent
   */
  datagridRefreshHandler($event: DataGridRefreshEvent) {

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
  datagridClickHandler?(index: number, item: DataGridColumn);
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
