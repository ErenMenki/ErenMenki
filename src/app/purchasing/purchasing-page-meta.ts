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
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
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
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
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
            dataType: FieldTypes.Id
        },
        {
            dataField: 'requester_name',
            headerText: 'Talep Eden',
            width: 150
        },
        {
            dataField: 'project_code',
            headerText: 'Proje',
            width: 150,
            dataType: FieldTypes.AutoComplete,
            filterField: 'project_id'
        },
        {
            dataField: 'request_date',
            headerText: 'Talep Tarihi',
            width: 150,
            dataType: FieldTypes.DatePicker,
            sortField: 'date_created'
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
            align: 'center',
            width: 150,
            labelFunction: function(params) { return params.data.status * 10; }
        },
        {
            dataField: 'status',
            headerText: 'Miktar',
            align: 'center',
            width: 150,
            dataType: FieldTypes.Unit,
            labelFunction: function(params) { return params.data.status * 19 / 3; }
        },
        {
            dataField: 'status',
            headerText: 'Fiyat',
            align: 'center',
            width: 150,
            dataType: FieldTypes.Currency,
            labelFunction: function(params) { return params.data.status * 21 / 2; }
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

export class PurchaseTenderListPageMeta implements PageMeta {
    pid = 2500;

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
            fieldName: 'purchase_tenders',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        },
        {
            fieldName: 'currency',
            responseFieldType: ResponseFieldDataSourceType.currencyDataSource,
            componentName: 'currency_type'
        },
        {
            fieldName: 'delivery_types',
            responseFieldType: ResponseFieldDataSourceType.datagridFilterDataSource,
            componentName: 'delivery_types'
        },
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'Teklif No',
            width: 80,
            dataType: FieldTypes.Id
        },
        {
            dataField: 'created_name',
            headerText: 'İşlemi Yapan',
            width: 150,
        },
        {
            dataField: 'suppliers',
            headerText: 'Tedarikçi',
            width: 150,
        },
        {
            dataField: 'delivery_name',
            headerText: 'Teslim Tipi',
            width: 150
        },
        {
            dataField: 'currency_name',
            headerText: 'Döviz Tipi',
            width: 150,
        },
        {
            dataField: 'request_date',
            headerText: 'Teklif Tarihi',
            width: 150,
            dataType: FieldTypes.DatePicker
        },
        {
            dataField: 'delivery_date',
            headerText: 'Teslim Tarihi',
            dataType: FieldTypes.DatePicker
        },
        {
            dataField: 'status',
            headerText: 'Durum',
        },
        {
            dataField: 'requesters',
            headerText: 'Talep Eden',
        },
        {
            dataField: 'request_nos',
            headerText: 'Talep Numaraları',
        },
    ];
}


export class SuppliersListPageMeta implements PageMeta {
    pid = 2600;

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
            fieldName: 'suppliers',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        },
        {
            fieldName: 'main_groups',
            responseFieldType: ResponseFieldDataSourceType.datagridFilterDataSource,
            componentName: 'main_groups'
        },
        {
            fieldName: 'countries',
            responseFieldType: ResponseFieldDataSourceType.datagridFilterDataSource,
            componentName: 'countries'
        },
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'Teklif No',
            width: 80,
            dataType: FieldTypes.Number
        },
        {
            dataField: 'name',
            headerText: 'Tedarikçi',
            width: 150,
        },
        {
            dataField: 'is_foreign',
            headerText: 'Tedarik Tipi',
            width: 150,
        },
        {
            dataField: 'approved_supplier',
            headerText: 'Tedarikçi Tipi',
            width: 150
        },
        {
            dataField: 'tax_number',
            headerText: 'Vergi No',
            width: 150,
        },
        {
            dataField: 'town',
            headerText: 'İlçe',
            width: 150,
        },
        {
            dataField: 'state',
            headerText: 'Şehir',
        }
    ];
}

export abstract class PageMetaDefs {
    public static material = MaterialsPageMeta;
    public static purchaseRequestList = PurchaseRequestListPageMeta;
    public static purchaseTenderList = PurchaseTenderListPageMeta;
    public static suppliersList = SuppliersListPageMeta;
}
