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
    this.veritabanindanBisilerGetir();
  }

  veritabanindanBisilerGetir() {
    setTimeout(() => {
      const opt = [
        { data: 'H', label: 'Hydrogen' },
        { data: 'O', label: 'Oxygen' },
        { data: 'Li', label: 'Lithium' },
        { data: 'Be', label: 'Beryllium' },
        { data: 'N', label: 'Nitrogen' },
      ];
      this.formItemChangeOption('material_group', opt);
      this.dataSource = [
        { id: 1, name: 'Hydrogen', code: 1.0079, main_group_name: 'H' },
        { id: 2, name: 'Helium', code: 4.0026, main_group_name: 'He' },
        { id: 3, name: 'Lithium', code: 6.941, main_group_name: 'Li' },
        { id: 4, name: 'Beryllium', code: 9.0122, main_group_name: 'Be' },
        { id: 5, name: 'Boron', code: 10.811, main_group_name: 'B' },
        { id: 6, name: 'Carbon', code: 12.0107, main_group_name: 'C' },
        { id: 7, name: 'Nitrogen', code: 14.0067, main_group_name: 'N' },
        { id: 8, name: 'Oxygen', code: 15.9994, main_group_name: 'O' },
        { id: 9, name: 'Fluorine', code: 18.9984, main_group_name: 'F' },
        { id: 10, name: 'Neon', code: 20.1797, main_group_name: 'Ne' },
      ];
    }, 1000);
  }

  barcodePrint() {

  }
}
