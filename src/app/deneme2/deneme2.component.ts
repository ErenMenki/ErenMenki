import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { GlobalsService } from '../core/services/globals.service';
import { ViasConnectionService } from '../core/services/vias-connection.service';

@Component({
  selector: 'vias-deneme2',
  templateUrl: '../components/page/page.component.html',
  styleUrls: ['../components/page/page.component.scss']
})
export class Deneme2Component extends PageComponent {

  constructor(protected globals: GlobalsService, protected viasService: ViasConnectionService) {
    super(globals, viasService);
    this.pageMeta = 'purchasing/material';
  }

  barcodePrint(){
    
  }
}
