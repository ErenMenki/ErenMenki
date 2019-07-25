import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
// import { StatusVars } from '../core/StatusVars';
import { Validators } from '@angular/forms';

export class WarehouseIntakesPageMeta implements PageMeta {
    pid = 3000;
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
            fieldName: 'warehouse_intakes',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'No',
            width: 80,
            dataType: FieldTypes.Id
        },
        {
            dataField: 'supplier_name',
            headerText: 'Tedarikçi Adı',
            width: 200
        },
        {
            dataField: 'delivery_date',
            headerText: 'Teslim Tarihi',
            width: 120,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'date_updated',
            headerText: 'Kayıt Tarihi',
            width: 120,
            dataType: FieldTypes.DatePicker,
            sortField: 'date_created'
        },
        {
            dataField: 'waybill_no',
            headerText: 'İrsaliye No',
            width: 110
        },
        {
            dataField: 'status',
            headerText: 'Teslimat Durumu',
            align: 'center',
            width: 150,
            labelFunction: function (params) {
                // return StatusVars.warehouseIntake[params.data.status].toString();
            }
        },
        {
            dataField: 'created_name',
            headerText: 'İşlemi Yapan',
            width: 150,
        },
        {
            dataField: 'waybill_date',
            headerText: 'İrsalye Tarihi',
            width: 120,
            dataType: FieldTypes.DatePicker
        },
        {
            dataField: 'invoice_status',
            headerText: 'Fatura Durumu',
            width: 150,
            labelFunction: function (params) {
                params.data.invoice_status = !params.data.invoice_status ? 0 : params.data.invoice_status;
                // return StatusVars.invoiceStatus[params.data.invoice_status].toString();
            }
        },
    ];
}
export class WarehouseWithdrawsPageMeta implements PageMeta {
    pid = 3100;
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
            fieldName: 'warehouse_withdraws',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'No',
            width: 80,
            dataType: FieldTypes.Id
        },
        {
            dataField: 'project_code',
            headerText: 'Proje Kodu',
            width: 100
        },
        {
            dataField: 'work_order_name',
            headerText: 'İş Emri',
            width: 200,
        },
        {
            dataField: 'date_withdrawal',
            headerText: 'Ayrılış Tarihi',
            width: 130,
            dataType: FieldTypes.DatePicker,
            sortField: 'date_withdrawal'
        },
        {
            dataField: 'date_updated',
            headerText: 'Kayıt Tarihi',
            width: 120,
            dataType: FieldTypes.DatePicker,
            sortField: 'date_updated'
        },
        {
            dataField: 'created_name',
            headerText: 'İşlemi Yapan',
            width: 150,
        },
        {
            dataField: 'location_name',
            headerText: 'Lokasyon',
            width: 150,
        },
        {
            dataField: 'status',
            headerText: 'Durumu',
            align: 'center',
            width: 150,
            labelFunction: function (params) {
                // return StatusVars.generalStatus[params.data.status].toString();
            }
        },
    ];
}

export abstract class PageMetaDefs {
    public static warehouseIntakes = WarehouseIntakesPageMeta;
    public static warehouseWithdraws = WarehouseWithdrawsPageMeta;
}
