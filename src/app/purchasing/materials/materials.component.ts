import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/core/services/globals.service';
import { ViasConnectionService, ViasResponse } from 'src/app/core/services/vias-connection.service';

@Component({
  selector: 'vias-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  pageno: number = 1;
  totalpage: number = 1;
  filtersObj: object = {};
  sortDescending: string = 'asc';
  sortColumn: string = 'id';

  project_detail_id: number = 0;
  contractor_id: number = 0;

  materials: Array<object> = [];

  constructor(public globals: GlobalsService, private viasService: ViasConnectionService) { }

  ngOnInit() {
    this.refreshData();
  }


  refreshData() {
    const sortObj: object = {
      column_name: this.sortColumn,
      sort_type: this.sortDescending
    };
    this.viasService.send(2000, 0, {
      sort: sortObj,
      page_no: this.pageno,
      filters: this.filtersObj,
      contractor_id: this.contractor_id,
      project_detail_id: this.project_detail_id
    }).then(response => {
      this.serviceHandler(response);
    },
      err => {
        alert(err);
      });
  }
  serviceHandler(r: ViasResponse) {
    console.log(r);
  }
}
