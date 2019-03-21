import { Injectable, Injector } from '@angular/core';
import { DataGridColumn } from 'src/app/components/datagrid/datagrid.component';
import { FormItem } from 'src/app/components/form/FormItem';

// import * as purchasing from 'src/app/purchasing/purchasing-page-meta';

export interface PageMeta {
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


  dataGridColumns?: DataGridColumn[];

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

  getPage(page: string): Promise<PageMeta> {
    const pagePieces = page.split('/');
    const fileLoc: string = 'src/app/' + pagePieces[0] + '/' + pagePieces[0] + '-page-meta';
    // #MaterialsPageMeta';
    return new Promise((resolve, reject) => {
      console.log(fileLoc);
      import('src/app/purchasing/purchasing-page-meta').then(
        res => {
          console.log(res);
          resolve(new res.MaterialsPageMeta());
        },
        err => {
          console.log('hahahahahaha');
          console.log(err);
          reject(err);
        }
      );
    });
    // switch (pagePieces[0]) {
    //   case 'purchasing':
    //     if (pagePieces[1] === 'material') {
    //       return new purchasing.MaterialsPageMeta();
    //     }
    //     break;
    // }
    return null;
  }
}
