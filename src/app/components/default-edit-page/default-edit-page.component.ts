import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageMeta } from 'src/app/core/services/page-meta.service';

@Component({
  selector: 'vias-default-edit-page',
  templateUrl: '../page/page.component.html',
  styleUrls: ['../page/page.component.scss']
})
export class DefaultEditPageComponent extends PageComponent {
  constructor(
    protected storage: StorageService,
    protected globals: GlobalsService,
    protected viasService: ViasConnectionService,
    protected next: ActivatedRoute,
    protected route: Router
  ) {
    super(storage, globals, viasService, next, route);
    this.hasDatagrid = false;
    this.hasEditForm = true;
  }

  generatePageFromMeta(pageMeta: PageMeta) {
    super.generatePageFromMeta(pageMeta);
    this.aid = pageMeta.inspectAid;
    this.hasButtonbar = pageMeta.hasButtonBarInList;
    this.dgButtons = {
      hasAddBtn: pageMeta.datagridHasAddBtn,
      hasEditBtn: pageMeta.datagridHasEditBtn,
      hasDeleteBtn: pageMeta.datagridHasDeleteBtn
    };
    console.log(pageMeta);
    this.refreshData();
  }
  viasServiceHandler(r: ViasResponse) {
    console.log(r);
    console.log('------cevap geldi');
    if (r.data) {
    }
  }
}
