import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
import { Validators } from '@angular/forms';


export class Sayfa implements PageMeta {
    pid: 4000;
    listAid: 1;
    hasSelectButton: true;
    hasMultiSelectDataGrid: true;

}




export abstract class PageMetaDefs {
    public static sayfaID = Sayfa;
}
