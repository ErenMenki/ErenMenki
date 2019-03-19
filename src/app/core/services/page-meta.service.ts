import { Injectable } from '@angular/core';
import { DataGridColumn } from 'src/app/components/datagrid/datagrid.component';
import { FormItem } from 'src/app/components/form/FormItem';

import * as purchasing from 'src/app/purchasing/purchasing-page-meta';

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

  FormItems?: FormItem[];
}

@Injectable({
  providedIn: 'root'
})
export class PageMetaService {

  constructor() { }

  getPage(page: string): PageMeta {
    const pagePieces = page.split('/');
    switch (pagePieces[0]) {
      case 'purchasing':
        if (pagePieces[1] === 'material') {
          return new purchasing.MaterialsPageMeta();
        }
        break;
    }
    return null;
  }
}
