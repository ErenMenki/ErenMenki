import { PageMeta, ResponseFieldDataSourceType } from '../core/services/page-meta.service';
import { FieldTypes } from '../core/FieldTypes';
import { Validators } from '@angular/forms';

export class SayfaAdiPageMeta implements PageMeta {
    pid: 0;
    hasSelectButton: true;
    hasMultiSelectDataGrid: false;
}
export class CalibrationFollowUpListPageMeta implements PageMeta {
    pid = 17020;
    hasSelectButton = true;
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
            fieldName: 'calibrations',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        {
            dataField: 'equipment_code',
            headerText: 'Demirbaş Kodu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'location_no',
            headerText: 'Lokasyon No ',
            align: 'left',
            widthPercent: 150,
        },
        {
            dataField: 'location_code',
            headerText: 'Lokasyon Kodu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'location',
            headerText: 'LokasyonLar',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'main_group_name',
            headerText: 'Ana Grubu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'group_name',
            headerText: 'Grup Adı',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'equipment_name',
            headerText: 'Demirbaş Adı',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'serial_no',
            headerText: 'Seri No',
            widthPercent: 150,
            align: 'left',
        },
        /*{
            dataField: 'piece',
            headerText: 'Adet',
            widthPercent: 150,
            align: 'left',
        },*/
        {
            dataField: 'last_date2',
            headerText: 'Son Kalibrasyon Trh.',
            widthPercent: 150,
            align: 'left',
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'next_date2',
            headerText: 'Gelecek Kalibrasyon Trh.',
            widthPercent: 150,
            align: 'left',
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'companies',
            headerText: 'Kalibrasyon Yapan Firma',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'certificate_no',
            headerText: 'Sertifika No',
            widthPercent: 150,
            align: 'left',
            
        },
        {
            dataField: 'measurement_value',
            headerText: 'Ölçüm Sahası',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'period',
            headerText: 'Periyot',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'damaged_name',
            headerText: 'Pert',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'status_cases',
            headerText: 'Durumu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'created_name',
            headerText: 'Hazırlayan',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'approved_name',
            headerText: 'Onay',
            widthPercent: 150,
            align: 'left',
        },
    ];

}
export class CoapListPageMeta implements PageMeta {
    pid = 17000;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
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
            fieldName: 'coap_list',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        {
            dataField: 'id',
            headerText: 'No',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'action_type_name',
            headerText: 'Faaliyet Türü',
            align: 'left',
            widthPercent: 150,
        },
        {
            dataField: 'prepared_names',
            headerText: 'Düzenleyen',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'prepared_name',
            headerText: 'Düzenleyen Elle Giriş',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'action_date',
            headerText: 'Tarih',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'yasal_zorunluluk',
            headerText: 'Yasal Zorunluluk - İlgili Standart',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'detected_name',
            headerText: 'Nasıl Tespit Edildi?',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'other_detected',
            headerText: 'Diğer Nasıl Tespit Edildi',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'nonconformity_description',
            headerText: 'Uygunsuzluğun Tanımı',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'responsible_users_name',
            headerText: 'Sorumlu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'estimated_close_date',
            headerText: 'Planlanan Kapatma Tarihi',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'actual_close_date',
            headerText: 'Gerçekleşen Kapatma Tarihi',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'contractor_name',
            headerText: 'Firma',
            widthPercent: 150,
            align: 'left',
            
        },
        {
            dataField: 'first_aid',
            headerText: 'Yapılan İlk Mudahale',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'first_aid_date',
            headerText: 'İlk Müdahale Tarihi',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'mudahale_sorumlusu',
            headerText: 'İlk Müdahale Sor.',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'mudahale_sorumlusu_elle_giris',
            headerText: 'İlk Müdahale Sor. Elle Giriş',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'preventive_actions',
            headerText: 'Düzeltici Önleyici Faaliyetler',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'coap_result_name',
            headerText: 'DÖF ETKINLIĞI',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'dof_date',
            headerText: 'DÖF ETKINLIĞI',
            widthPercent: 150,
            align: 'left',
        },
    ];

}
export class CoapRootCausesListPageMeta implements PageMeta {
    pid = 17010;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
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
            fieldName: 'root_causes',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        /*{
            dataField: 'id',
            headerText: 'No',
            widthPercent: 150,
            align: 'left',
        },*/
        {
            dataField: 'root_id',
            headerText: 'ID',
            align: 'left',
            widthPercent: 150,
        },
        {
            dataField: 'name',
            headerText: 'Kaza-Olay Kök Nedeni',
            widthPercent: 150,
            align: 'left',
        },
    ];
}
export class CustomerVisitFollowUpListPageMeta implements PageMeta {
    pid = 18850;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
    listAid = 1;
   // addAid = 0;
   // editAid = 0;
   // deleteAid = 0;
    hasButtonBarInEdit = true;
    hasButtonBarInList = true;
    pageNoField = 'page_no';
    pageTotalField = 'total_page';

    responseFields = [
        {
            fieldName: 'countries',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        {
            dataField: 'status_name',
            headerText: 'Durumu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'name_surname',
            headerText: 'Ziyarete Gidenin Ad Soyad',
            align: 'left',
            widthPercent: 150,
        },
        {
            dataField: 'countries_name',
            headerText: 'Ziyarete Gidilen Ülke',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'date1',
            headerText: 'Tarih 1',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'date_2',
            headerText: 'Tarih 2',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'countries_count',
            headerText: 'Ziyaret Ettiği Firma Sayısı',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'controlling_name',
            headerText: 'Kontrol Eden:',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'approver_name',
            headerText: 'ONAYLAYAN',
            widthPercent: 150,
            align: 'left',
        },
        /*{
            dataField: 'id',
            headerText: 'ID',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'created_by',
            headerText: 'İşlemi Yapan',
            widthPercent: 150,
            align: 'left',
        },*/
    ];
}
export class DocumentTreePageMeta implements PageMeta {
    pid = 18500;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
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
            fieldName: 'doc_tree',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        {
            dataField: 'name',
            headerText: 'Döküman Ağacı',
            widthPercent: 500,
        }
    ];
}
export class LiftingEquipmentsLoadTestingListPageMeta implements PageMeta {
    pid = 17050;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
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
            fieldName: 'lifting_euipments_load_testing',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        {
            dataField: 'equipment_code',
            headerText: 'Demirbaş Kodu',
            widthPercent: 500,
        },
        {
            dataField: 'location_no',
            headerText: 'Lokasyon No ',
            widthPercent: 500,
        },
        {
            dataField: 'location_code',
            headerText: 'Lokasyon Kodu',
            widthPercent: 500,
        },
        {
            dataField: 'location',
            headerText: 'Lokasyon',
            widthPercent: 500,
        },
        {
            dataField: 'main_group_name',
            headerText: 'Ana Grubu',
            widthPercent: 500,
        },
        {
            dataField: 'group_name',
            headerText: 'Grup Adı ',
            widthPercent: 500,
        },
        {
            dataField: 'equipment_name',
            headerText: 'Demirbaş Adı',
            widthPercent: 500,
        },
        {
            dataField: 'serial_no',
            headerText: 'Seri No',
            widthPercent: 500,
        },
        {
            dataField: 'piece',
            headerText: 'Adet',
            widthPercent: 500,
        },
        {
            dataField: 'last_date2',
            headerText: 'Son Yük Testi Trh.',
            widthPercent: 500,
        },
        {
            dataField: 'next_date2',
            headerText: 'Gelecek Yük Testi Trh.',
            widthPercent: 500,
        },
        {
            dataField: 'companies',
            headerText: 'Yük Testi Yapan Firma',
            widthPercent: 500,
        },
        {
            dataField: 'certificate_no',
            headerText: 'Sertifika No',
            widthPercent: 500,
        },
        {
            dataField: 'measurement_value',
            headerText: 'Ölçüm Sahası',
            widthPercent: 500,
        },
        {
            dataField: 'period',
            headerText: 'Periyot',
            widthPercent: 500,
        },
        {
            dataField: 'damaged_name',
            headerText: 'Pert',
            widthPercent: 500,
        },
        {
            dataField: 'swl',
            headerText: 'Swl',
            widthPercent: 500,
        },
        {
            dataField: 'dynamic_weight',
            headerText: 'Dinamik Yük Test Ağırlığı',
            widthPercent: 500,
        },
        {
            dataField: 'static_weight',
            headerText: 'Statik Yük Test Ağırlığı',
            widthPercent: 500,
        },
        {
            dataField: 'status_cases',
            headerText: 'Durumu',
            widthPercent: 500,
        },
        {
            dataField: 'created_name',
            headerText: 'Hazırlayan',
            widthPercent: 500,
        },
        {
            dataField: 'approved_name',
            headerText: 'Onay',
            widthPercent: 500,
        },
        /*{
            dataField: 'id',
            headerText: 'ID',
            widthPercent: 500,
        },
        {
            dataField: 'equipment_id',
            headerText: 'Demirbaş Id',
            widthPercent: 500,
        },*/
    ];
}
export class MasterTablePageMeta implements PageMeta {
    pid = 18980;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
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
            fieldName: 'prosedur',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        {
            dataField: 'doc_tree_code',
            headerText: 'Döküman Kodu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'doc_tree_name',
            headerText: 'Döküman Adı',
            align: 'left',
            widthPercent: 150,
        },
        {
            dataField: 'publication_date',
            headerText: 'Yayın Tarihi',
            widthPercent: 150,
            align: 'left',
            dataType: FieldTypes.DatePicker,
        },
        {
            dataField: 'section_name',
            headerText: 'Kullanılan Bölüm/Saklama Sorumlusu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'revision_date',
            headerText: 'Revizyon Tarihi',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'revision_no',
            headerText: 'Revizyon No',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'department_name',
            headerText: 'Dağıtım Yeri/Bulunan Alan',
            widthPercent: 150,
            align: 'left',
        },
        /*{
            dataField: 'id',
            headerText: 'ID',
            widthPercent: 150,
            align: 'left',
        },*/
    ];
}
export class PeriodicMaintenanceFollowUpListPageMeta implements PageMeta {
    pid = 18650;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
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
            fieldName: 'periyod',
            responseFieldType : ResponseFieldDataSourceType.datagridDataSource
        }
    ];
    dataGridColumns = [
        {
            dataField: 'equipment_code',
            headerText: 'Demirbaş Kodu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'location_no',
            headerText: 'Lokasyon No ',
            align: 'left',
            widthPercent: 150,
        },
        {
            dataField: 'location_code',
            headerText: 'Lokasyon Kodu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'location',
            headerText: 'Lokasyon',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'main_group_name',
            headerText: 'Ana Grubu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'group_name',
            headerText: 'Grup Adı',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'equipment_name',
            headerText: 'Demirbaş Adı',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'serial_no',
            headerText: 'Seri No',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'piece',
            headerText: 'Adet',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'last_date2',
            headerText: 'Son Periodik Bakım Trh.',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'next_date2',
            headerText: 'Gelecek P. Bakım Trh.',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'companies',
            headerText: 'Bakım Yapan Firma',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'rapor_no',
            headerText: 'Rapor No',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'measurement_value',
            headerText: 'Ölçüm Sahası',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'period',
            headerText: 'Periyot',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'damaged',
            headerText: 'Pert',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'status_case',
            headerText: 'Durumu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'created_name',
            headerText: 'Hazırlayan',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'status_case',
            headerText: 'Durumu',
            widthPercent: 150,
            align: 'left',
        },
        {
            dataField: 'approved_name',
            headerText: 'Onay',
            widthPercent: 150,
            align: 'left',
        },
    ];
}
export abstract class PageMetaDefs {
    public static sayfaAdi = SayfaAdiPageMeta;
    public static CalibrationFollowUpList = CalibrationFollowUpListPageMeta;
    public static CoapList = CoapListPageMeta;
    public static CoapRootCausesList = CoapRootCausesListPageMeta;
    public static CustomerVisitFollowUpList = CustomerVisitFollowUpListPageMeta;
    public static DocumentTree = DocumentTreePageMeta;
    public static LiftingEquipmentsLoadTestingList = LiftingEquipmentsLoadTestingListPageMeta;
    public static MasterTable = MasterTablePageMeta;
    public static PeriodicMaintenanceFollowUpList = PeriodicMaintenanceFollowUpListPageMeta;
    
}
