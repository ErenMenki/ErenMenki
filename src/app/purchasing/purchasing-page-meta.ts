import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
import { Validators } from '@angular/forms';

export class MaterialsPageMeta implements PageMeta {
    pid = 2000;
    listPageName = 'material-list';
    editPageName = 'material-edit';

    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
    listAid = 0;
    inspectAid = 1;
    addAid = 2;
    editAid = 3;
    deleteAid = 4;

    pageNoField = 'page_no';
    pageTotalField = 'total_page';
    datagridHasAddBtn = true;
    datagridHasEditBtn = true;
    datagridHasDeleteBtn = false;

    responseFields = [
        {
            fieldName: 'materials',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        },
        {
            fieldName: 'main_groups',
            responseFieldType: ResponseFieldDataSourceType.datagridFilterDataSource,
            componentName: 'main_group_name'
        },
        {
            fieldName: 'materials',
            responseFieldType: ResponseFieldDataSourceType.formDataSource
        },
        {
            fieldName: 'units',
            responseFieldType: ResponseFieldDataSourceType.formFieldDataSource,
            componentName: 'units'
        },
        {
            fieldName: 'currency',
            responseFieldType: ResponseFieldDataSourceType.formFieldDataSource,
            componentName: 'currency'
        },
        {
            fieldName: 'material_groups',
            responseFieldType: ResponseFieldDataSourceType.formFieldDataSource,
            componentName: 'material_groups'
        },
        {
            fieldName: 'units',
            responseFieldType: ResponseFieldDataSourceType.formFieldDataSource,
            componentName: 'units'
        },
    ];
    dataGridColumns = [
        {
            dataField: 'code',
            headerText: 'Malzeme Kodu',
            width: 100,
            align: 'right',
            footerData: 'deneme footer',
            dataType: FieldTypes.Text
        },
        {
            dataField: 'name',
            headerText: 'Malzeme Tanımı',
            widthPercent: 50,
            align: 'left',
            dataType: FieldTypes.Text
        },
        {
            dataField: 'main_group_name',
            headerText: 'Ana Grubu',
            dataType: FieldTypes.DropDown
        },
        {
            dataField: 'group_name',
            headerText: 'Grubu',
            dataType: FieldTypes.Text
        },
        {
            dataField: 'purchase_unit_name',
            headerText: 'S.Alma Birimi',
            dataType: FieldTypes.Text
        },
        {
            dataField: 'min_stock',
            headerText: 'Min Stok',
            dataType: FieldTypes.Number
        },
        {
            dataField: 'max_stock',
            headerText: 'Maks Stok',
            dataType: FieldTypes.Number
        },
    ];

    formItems = [
        {
            type: FieldTypes.Number,
            label: 'Malzeme Kodu',
            name: 'code',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Malzeme Kodu Gerekli Alandır'
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
            label: 'Malzeme Tanımı',
            name: 'material_name',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Malzeme Kodu Gerekli Alandır'
                }
            ]
        },
        {
            type: FieldTypes.AutoComplete,
            label: 'Malzeme Grubu',
            name: 'material_group',
            // optionInitFunction: 'getMaterialGroups',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Malzeme Kodu Gerekli Alandır'
                }
            ],
        }
    ];
}

export class PurchaseRequestListPageMeta implements PageMeta {
    pid = 2400;

    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
    listAid = 0;
    inspectAid = 1;
    addAid = 2;
    editAid = 3;
    deleteAid = 4;

    pageNoField = 'page_no';
    pageTotalField = 'total_page';
    datagridHasAddBtn = true;
    datagridHasEditBtn = true;
    datagridHasDeleteBtn = true;

    responseFields = [
        {
            fieldName: 'purchase_requests',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        },
        {
            fieldName: 'projects',
            responseFieldType: ResponseFieldDataSourceType.datagridFilterDataSource,
            componentName: 'project_id'
        },
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'Talep No',
            width: 80,
            dataType: FieldTypes.Number
        },
        {
            dataField: 'requester_name',
            headerText: 'Talep Eden',
            width: 150,
        },
        {
            dataField: 'project_code',
            headerText: 'Proje',
            width: 150,
            dataType: FieldTypes.DropDown,
            filterField: 'project_id'
        },
        {
            dataField: 'request_date',
            headerText: 'Talep Tarihi',
            width: 150,
            dataType: FieldTypes.DatePicker
        },
        {
            dataField: 'delivery_date',
            headerText: 'Teslim Tarihi',
            width: 150,
            dataType: FieldTypes.DatePicker
        },
        {
            dataField: 'status',
            headerText: 'Durumu',
            width: 150,
            labelFunction: 'bisi bisi'
        },
        {
            dataField: 'purchaser_name',
            headerText: 'Satınalmacı',
        },
        {
            dataField: 'created_name',
            headerText: 'Kayıt Eden',
        },
        {
            dataField: 'deny_reason',
            headerText: 'Red Sebebi',
        },
    ];
}

export abstract class PageMetaDefs {
    public static material = MaterialsPageMeta;
    public static purchaseRequestList = PurchaseRequestListPageMeta;
}
