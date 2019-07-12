import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
import { Validators } from '@angular/forms';


export class RepairProjectEdit implements PageMeta {
    pid: 0;
    hasSelectButton: true;
    hasMultiSelectDataGrid: true;
}




export abstract class PageMetaDefs {
    public static repairProjectEdit = RepairProjectEdit;
}
