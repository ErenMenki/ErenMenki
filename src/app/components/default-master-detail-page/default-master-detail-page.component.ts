import { Component, OnInit, OnChanges } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageMeta } from 'src/app/core/services/page-meta.service';

@Component({
  selector: 'vias-default-master-detail-page',
  templateUrl: '../page/page.component.html',
  styleUrls: ['../page/page.component.scss']
})
export class DefaultMasterDetailPageComponent extends PageComponent {

  constructor(
    protected globals: GlobalsService,
    protected viasService: ViasConnectionService,
    protected next: ActivatedRoute,
    protected route: Router
  ) {
    super(globals, viasService, next, route);
    this.hasDatagrid = true;
    this.hasEditForm = true;
  }


  generatePageFromMeta(pageMeta: PageMeta) {
    super.generatePageFromMeta(pageMeta);
    this.aid = pageMeta.listAid;
    this.hasButtonbar = pageMeta.hasButtonBarInList;
    console.log(pageMeta);
    this.refreshData();
  }

  viasServiceHandler(r: ViasResponse) {
    console.log(r);
    console.log('------cevap geldi');
    if (r.data) {
      console.log(r.data);
      if (r.data['duty_code']) {
        this.dataSource = r.data['duty_code'];
      }
      if (r.data['total_page']) {
        this.totalPages = r.data['total_page'];
      }
      if (r.data['page_no']) {
        this.pageno = r.data['page_no'];
      }
    }
  }
}
