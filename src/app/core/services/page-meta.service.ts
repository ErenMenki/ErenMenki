import { Injectable, Injector } from '@angular/core';
import { DataGridColumn, SortObject } from 'src/app/components/datagrid/datagrid.component';
import { FormItem } from 'src/app/components/form/FormItem';

// import * as purchasing from 'src/app/purchasing/purchasing-page-meta';

export enum ResponseFieldDataSourceType {
  datagridDataSource,
  datagridFilterDataSource,
  formDataSource,
  formFieldDataSource,
  currencyDataSource,
}

export interface ResponseField {
  fieldName: string;
  responseFieldType: ResponseFieldDataSourceType;
  componentName?: string;
  isKeyValuePair?: boolean;
}

export interface PageMeta {
  listPageName?: string;
  editPageName?: string;

  pid: number;
  // bu sayfadan baska sayfaya secim yapilacak mi?
  hasSelectButton: boolean;
  // bu sayfanin datagrid coktan secmeli checkbox olacak mi?
  hasMultiSelectDataGrid: boolean;

  listAid?: number;
  inspectAid?: number;
  addAid?: number;
  editAid?: number;
  deleteAid?: number;
  // burasi belki kullanmilmayacak
  listChildrenAid?: number;
  addChildAid?: number;
  editChildAid?: number;
  deleteChildAid?: number;

  hasButtonBarInList?: boolean;
  hasButtonBarInEdit?: boolean;

  dataGridColumns?: DataGridColumn[];

  dataGridInitialSort?: SortObject;

  // list icin alanlar
  pageNoField?: string;
  pageTotalsField?: string;
  responseFields?: ResponseField[];
  datagridHasAddBtn?: boolean;
  datagridHasEditBtn?: boolean;
  datagridHasDeleteBtn?: boolean;

  formItems?: FormItem[];
}

@Injectable({
  providedIn: 'root',
  // useFactory: () => {
  //    return new purchasing.MaterialsPageMeta();
  // }
})
export class PageMetaService {

  constructor() {
  }

  // getInstance(name: string, ...args: any[]) {
  //     var instance = Object.create(this.context[name].prototype);
  //     instance.constructor.apply(instance, args);
  //     return instance;
  // }

  getPage(moduleName: string, pageName: string): Promise<PageMeta> {
    return new Promise((resolve, reject) => {
      import(`src/app/${moduleName}/${moduleName}-page-meta`).then(
        res => {
          // console.log(res);
          resolve(new res.PageMetaDefs[pageName]);
        },
        err => {
          console.log('hahahahahaha');
          console.log(err);
          reject(err);
        }
      );
    });
    return null;
  }
}
