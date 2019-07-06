import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
import { Validators } from '@angular/forms';


export class DutyCodesPageMeta implements PageMeta {
    pid = 175;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
    listAid = 0;
    inspectAid = 1;
    addAid = 2;
    editAid = 3;
    deleteAid = 4;
    hasButtonBarInEdit = false;
    hasButtonBarInList = false;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'duty_code',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'code',
            headerText: 'Görev Kodu',
            width: 100,
            align: 'right',
            dataType: FieldTypes.Text
        },
        {
            dataField: 'name',
            headerText: 'Görev/Meslek',
            widthPercent: 150,
            align: 'left',
            dataType: FieldTypes.Text
        },
    ];

    formItems = [
        {
            type: FieldTypes.Number,
            label: 'Görev Kodu',
            name: 'code',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Görev Kodu Gerekli Alandır'
                },
                {
                    name: 'pattern',
                    validator: Validators.pattern('^[0-9]+$'),
                    message: 'Sadece nümerik değer girebilirsiniz'
                }
            ]
        },
        {
            type: FieldTypes.Text,
            label: 'Görev/Meslek Tanımı',
            name: 'name',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Görev/Meslek Tanımı Gerekli Alandır'
                }
            ]
        }
    ];
}

export class IncidentScenesPageMeta implements PageMeta {
    pid = 13009;
    hasSelectButton = true;
    hasMultiSelectDataGrid = false;
    listAid = 9;
    // inspectAid = 1;
    addAid = 6;
    editAid = 7;
    // deleteAid = 4;
    hasButtonBarInEdit = false;
    hasButtonBarInList = false;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'incident_scenes',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'name',
            headerText: 'Lokasyon Adı'
        }
    ];

    formItems = [
        {
            type: FieldTypes.Text,
            label: 'Lokasyon Adı',
            name: 'name',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Lokasyon Adı Gerekli Alandır'
                }
            ]
        }
    ];
}



export abstract class PageMetaDefs {
    public static dutycodes = DutyCodesPageMeta;
    public static incidentScenes = IncidentScenesPageMeta;
}
