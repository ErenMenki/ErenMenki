import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
import { Validators } from '@angular/forms';


export class SayfaAdiPageMeta implements PageMeta {
    pid: 0;
    hasSelectButton: true;
    hasMultiSelectDataGrid: false;
}




export abstract class PageMetaDefs {
    public static sayfaAdi = SayfaAdiPageMeta;
}
