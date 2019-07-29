import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
import { Validators } from '@angular/forms';

export class SayfaAdiPageMeta implements PageMeta {
    pid: 0;
    hasSelectButton: true;
    hasMultiSelectDataGrid: false;
}
export class internalJobRequestPageMeta implements PageMeta {
    pid = 8600;
    hasSelectButton = false;
    hasMultiSelectDataGrid = false;
    listAid = 0;
    // addAid = 0;
    // editAid = 0;
    // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'daf',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        },
        {
            fieldName: 'users',
            responseFieldType: ResponseFieldDataSourceType.datagridFilterDataSource,
            componentName: 'created_by'
        },
        {
            fieldName: 'users',
            responseFieldType: ResponseFieldDataSourceType.datagridFilterDataSource,
            componentName: 'approved_by'
        }
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'ID',
            widthPercent: 150,
        },
        {
            dataField: 'date',
            headerText: 'Tarih',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'created_by',
            headerText: 'İşlem Yapan',
            widthPercent: 150,
            dataType: FieldTypes.AutoComplete,
            filterDataLabelField: 'name_surname',
            labelFunctionIsFilter: true
        },
        {
            dataField: 'purpose_work',
            headerText: 'İşin Amacı',
            widthPercent: 150,
        },
        {
            dataField: 'deadline',
            headerText: 'Termin',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'estimated_cost_discovery',
            headerText: 'Toplam D.I.T Tutarı',
            widthPercent: 150,
            dataType: FieldTypes.Currency
        },
        {
            dataField: 'approval_names',
            headerText: 'Onaylayacak Kişiler',
            widthPercent: 150,
        },
        {
            dataField: 'status',
            headerText: 'Durumu',
            widthPercent: 150,
        },
        {
            dataField: 'file_exists',
            headerText: 'Dosya',
            widthPercent: 150,
            labelFunction: (params) => {
                return (params.data.file_exists ? 'Var' : 'Yok');
            }
        },
        {
            dataField: 'approved_by',
            headerText: '1.Onay Veren',
            widthPercent: 150,
            filterField: 'approved_by',
            dataType: FieldTypes.AutoComplete,
            filterDataLabelField: 'name_surname',
            labelFunctionIsFilter: true

        },
        {
            dataField: 'date_approved',
            headerText: '1.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name2',
            headerText: '2.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved2',
            headerText: '2.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name3',
            headerText: '3.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved3',
            headerText: '3.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name4',
            headerText: '4.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved4',
            headerText: '4.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
    ];

}
export class shipyardJobRequestFollowPageMeta implements PageMeta {
    pid = 8900;
    hasSelectButton = false;
    hasMultiSelectDataGrid = false;
    listAid = 0;
    // addAid = 0;
    // editAid = 0;
    // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'saf',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'ID',
            widthPercent: 150,
        },
        {
            dataField: 'date',
            headerText: 'Tarih',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'created_name',
            headerText: 'İşlem Yapan',
            widthPercent: 150,
        },
        {
            dataField: 'purpose_work',
            headerText: 'İşin Amacı',
            widthPercent: 150,
        },
        {
            dataField: 'deadline',
            headerText: 'Termin',
            widthPercent: 150,
        },
        {
            dataField: 'estimated_cost_discovery',
            headerText: 'Toplam T.R.S Tutarı',
            widthPercent: 150,
        },
        {
            dataField: 'approval_names',
            headerText: 'Onaylayacak Kişiler',
            widthPercent: 150,
        },
        {
            dataField: 'status',
            headerText: 'Durumu',
            widthPercent: 150,
        },
        {
            dataField: 'approved_by_name',
            headerText: '1.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved',
            headerText: '1.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name2',
            headerText: '2.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved2',
            headerText: '2.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name3',
            headerText: '3.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved3',
            headerText: '3.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name4',
            headerText: '4.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved4',
            headerText: '4.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
    ];
}
export class utensilDamageFollowPageMeta implements PageMeta {
    pid = 8700;
    hasSelectButton = false;
    hasMultiSelectDataGrid = false;
    listAid = 0;
    // addAid = 0;
    // editAid = 0;
    // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'tdaf',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'ID',
            widthPercent: 150,
        },
        {
            dataField: 'date',
            headerText: 'Tarih',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'contractorName',
            headerText: 'Müteahhit Firma Adı',
            widthPercent: 150,
        },
        {
            dataField: 'personDidDamage',
            headerText: 'Hasar`ı Yapan/Tespit Eden Personel ',
            widthPercent: 150,
        },
        {
            dataField: 'created_name',
            headerText: 'İşlem Yapan',
            widthPercent: 150,
        },
        {
            dataField: 'price',
            headerText: 'Toplam T.H Tutarı',
            widthPercent: 150,
        },
        {
            dataField: 'deduction_amount',
            headerText: 'Toplam Kesinti Tutarı',
            widthPercent: 150,
        },
        {
            dataField: 'description',
            headerText: 'İşin Amacı',
            widthPercent: 150,
        },
        {
            dataField: 'status',
            headerText: 'Durumu',
            widthPercent: 150,
        },
        {
            dataField: 'approval_names',
            headerText: 'Onaylaycak Kişiler',
            widthPercent: 150,
        },
        {
            dataField: 'file_exists',
            headerText: 'Dosya',
            widthPercent: 150,
        },
        {
            dataField: 'approved_by_name',
            headerText: '1.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved',
            headerText: '1.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name2',
            headerText: '2.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved2',
            headerText: '2.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name3',
            headerText: '3.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved3',
            headerText: '3.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'approved_by_name4',
            headerText: '4.Onay Veren',
            widthPercent: 150,
        },
        {
            dataField: 'date_approved4',
            headerText: '4.Onaylama Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
    ];
}
export class logisticRequestPageMeta implements PageMeta {
    pid = 8800;
    hasSelectButton = false;
    hasMultiSelectDataGrid = false;
    listAid = 0;
    // addAid = 0;
    // editAid = 0;
    // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'logistic_requests',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'ID',
            widthPercent: 150,
        },
        {
            dataField: 'created_name',
            headerText: 'Talep Eden',
            widthPercent: 150,
        },
        {
            dataField: 'project_name',
            headerText: 'Proje Adı',
            widthPercent: 150,
        },
        {
            dataField: 'work_order',
            headerText: 'İş Emri',
            widthPercent: 150,
        },
        {
            dataField: 'equipment',
            headerText: 'Araç/Ekipman Adı',
            widthPercent: 150,
        },
        {
            dataField: 'date',
            headerText: 'Tarih',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'date_request',
            headerText: 'Talep Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'start_hour',
            headerText: 'Saat',
            widthPercent: 150,
        },
        {
            dataField: 'logistic_start_point',
            headerText: 'Lojistik Başlangıç Noktası',
            widthPercent: 150,
        },
        {
            dataField: 'logistic_end_point',
            headerText: 'Lojistik Bitiş Noktası',
            widthPercent: 150,
        },
        {
            dataField: 'estimated_time',
            headerText: 'Tahmini Süre DK',
            widthPercent: 150,
        },
        {
            dataField: 'notes',
            headerText: 'Not',
            widthPercent: 150,
        },
        {
            dataField: 'description',
            headerText: 'Açıklama',
            widthPercent: 150,
        },
        {
            dataField: 'status',
            headerText: 'Durumu',
            widthPercent: 150,
        },
    ];
}

export class technicalServicesProjectsPageMeta implements PageMeta {
    pid = 8200;
    hasSelectButton = false;
    hasMultiSelectDataGrid = false;
    listAid = 0;
    // addAid = 0;
    // editAid = 0;
    // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'project_details',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'order_no',
            headerText: 'Sıra',
            widthPercent: 150,
        },
        {
            dataField: 'block_no',
            headerText: 'İş Emri No',
            widthPercent: 150,
        },
        {
            dataField: 'reference_no',
            headerText: 'Referans No',
            widthPercent: 150,
        },
        {
            dataField: 'work_description_en',
            headerText: 'S.D.İ İşin Tanımı',
            widthPercent: 150,
        },
        {
            dataField: 'work_description_tr',
            headerText: 'S.D.İ İş Emri',
            widthPercent: 150,
        },
        /*{
            dataField: 'status',
            headerText: 'Durumu',
            widthPercent: 150,
                    },*/
        {
            dataField: 'quotation_price',
            headerText: 'Toplam Fiyat',
            widthPercent: 150,
        },
        {
            dataField: 'work_order_pic_name',
            headerText: 'İş Emri Sorumlusu',
            widthPercent: 150,
        },
        {
            dataField: 'contractor_name',
            headerText: 'Müteahhit Firma',
            widthPercent: 150,
        },
        {
            dataField: 'notes_tr',
            headerText: 'Remark',
            widthPercent: 150,
        },
        {
            dataField: 'updated_name',
            headerText: 'Son Güncelleyen',
            widthPercent: 150,
        },
        {
            dataField: 'date_updated',
            headerText: 'Son Güncelleme Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
    ];
}
export class LiftingEquipmentTestingPageMeta implements PageMeta {
    pid = 8500;
    hasSelectButton = false;
    hasMultiSelectDataGrid = false;
    listAid = 0;
    // addAid = 0;
    // editAid = 0;
    // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'equipment_list',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'equipment_code',
            headerText: 'Demirbaş Kodu',
            widthPercent: 150,
        },
        {
            dataField: 'location_no',
            headerText: 'Lokasyon No',
            widthPercent: 150,
        },
        {
            dataField: 'location_code',
            headerText: 'Lokasyon Kodu',
            widthPercent: 150,
        },
        {
            dataField: 'location',
            headerText: 'Lokasyon',
            widthPercent: 150,
        },
        {
            dataField: 'main_group_name',
            headerText: 'Ana Grubu',
            widthPercent: 150,
        },
        {
            dataField: 'group_name',
            headerText: 'Grup Adı',
            widthPercent: 150,
        },
        {
            dataField: 'equipment_name',
            headerText: 'Demirbaş Adı',
            widthPercent: 150,
        },
        {
            dataField: 'serial_no',
            headerText: 'Seri No',
            widthPercent: 150,
        },
        {
            dataField: 'equipment_date',
            headerText: 'Kontrol Tarihi',
            widthPercent: 150,
        },
        {
            dataField: 'equipment_date_3_ay',
            headerText: 'Sonraki Kontrol Tarihi',
            widthPercent: 150,
        },
        {
            dataField: 'updated_name',
            headerText: 'Son Güncelleyen',
            widthPercent: 150,
        },
        {
            dataField: 'firma',
            headerText: 'Firma',
            widthPercent: 150,

        },
        {
            dataField: 'note',
            headerText: 'Açıklama',
            widthPercent: 150,

        },
        {
            dataField: 'operational_capacity',
            headerText: 'Tonaj(Ton)',
            widthPercent: 150,

        },
        {
            dataField: 'chain_length',
            headerText: 'Zincir Uzunluğu(M)',
            widthPercent: 150,

        },
        {
            dataField: 'shackle_Wire_diameter',
            headerText: 'Yük Zin.Bakla Tel Çapı(mm)',
            widthPercent: 150,

        },
        {
            dataField: 'Interior_length',
            headerText: 'Yük Zin.Bakla Tel İç Genişliği(mm)',
            widthPercent: 150,

        },
        {
            dataField: 'spacious_interior',
            headerText: 'Yük Zin.Bakla Tel İç Uzunluğu(mm)',
            widthPercent: 150,

        },
        {
            dataField: 'before_load_hook',
            headerText: 'Yük  kanca Ağız Açılığı(mm)',
            widthPercent: 150,

        },
        {
            dataField: 'before_peg_hook',
            headerText: 'Askı Kanca Ağız Açıklığı (mm)',
            widthPercent: 150,

        },
        {
            dataField: 'created_name',
            headerText: 'Testi Yapan',
            widthPercent: 150,

        },
        {
            dataField: 'manager_name',
            headerText: 'Onaylayan',
            widthPercent: 150,

        },
        {
            dataField: 'approver_name',
            headerText: 'Ekipmanı Teslim Alan/Teslim Eden',
            widthPercent: 150,

        },
        /*{
            dataField: 'İd',
            headerText: 'Id',
            widthPercent: 150,
                        
        },
        {
            dataField: 'equipment_id',
            headerText: 'Ekipman Id',
            widthPercent: 150,
                        
        },*/

    ];
}
export class ScrapFollowPageMeta implements PageMeta {
    pid = 19990;
    hasSelectButton = false;
    hasMultiSelectDataGrid = false;
    listAid = 0;
    // addAid = 0;
    // editAid = 0;
    // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'scrap',
            responseFieldType: ResponseFieldDataSourceType.datagridDataSource
        }
    ];

    dataGridColumns = [
        {
            dataField: 'first_in_date',
            headerText: '1. Giriş Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'first_plaque',
            headerText: 'Plaka',
            widthPercent: 150,
        },
        {
            dataField: 'first_driver',
            headerText: 'Sürücü',
            widthPercent: 150,
        },
        {
            dataField: 'kasa',
            headerText: 'Kasa Ağırlık',
            widthPercent: 150,
        },
        {
            dataField: 'second_date',
            headerText: '2. Giriş Tarihi',
            widthPercent: 150,
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'second_plaque',
            headerText: 'Plaka',
            widthPercent: 150,
        },
        {
            dataField: 'second_driver',
            headerText: 'Sürücü',
            widthPercent: 150,
        },
        {
            dataField: 'scrap_weight',
            headerText: 'Hurda Ağırlık',
            widthPercent: 150,
        },
        {
            dataField: 'scrap_grand_total',
            headerText: 'Hurda Fiyatı',
            widthPercent: 150,
        },
    ];
}

export abstract class PageMetaDefs {
    //public static sayfaAdi = SayfaAdiPageMeta;
    public static internalJobRequest = internalJobRequestPageMeta;
    public static shipyardJobRequestFollow = shipyardJobRequestFollowPageMeta;
    public static utensilDamageFollow = utensilDamageFollowPageMeta;
    public static logisticRequest = logisticRequestPageMeta;
    public static technicalServicesProjects = technicalServicesProjectsPageMeta;
    public static LiftingEquipmentTesting = LiftingEquipmentTestingPageMeta;
    public static ScrapFollow = ScrapFollowPageMeta;
}


