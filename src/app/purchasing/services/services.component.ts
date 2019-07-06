import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/components/page/page.component';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { ViasConnectionService } from 'src/app/core/services/vias-connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vias-services',
  templateUrl: '../../components/page/page.component.html',
  styleUrls: ['../../components/page/page.component.scss']
})
export class ServicesComponent extends PageComponent implements OnInit {

  constructor(
    protected globals: GlobalsService,
    protected viasService: ViasConnectionService,
    protected next: ActivatedRoute,
    protected route: Router
  ) {
    super(globals, viasService, next, route);
    if (next.snapshot.data.aid === 0) {
      this.hasDatagrid = true;
      this.hasEditForm = false;
    } else {
      this.hasDatagrid = false;
      this.hasEditForm = true;
    }
  }
  ngOnInit() {
    this.refreshData();
  }
}
