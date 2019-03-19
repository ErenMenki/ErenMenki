import { PageMeta } from '../core/services/page-meta.service';
import { FormTypes, DropdownFormItem, AutoCompleteFormItem, TextboxFormItem } from '../components/form/FormItem';
import { Validators } from '@angular/forms';

export class MaterialsPageMeta implements PageMeta {
    pid = 2000;
    hasSelectButton = true;
    hasMultiSelectDataGrid = true;
    listAid = 0;
    inspectAid = 1;
    addAid = 2;
    editAid = 3;
    deleteAid = 4;

    dataGridColumns = [
        {
            dataField: 'code',
            headerText: 'Malzeme Kodu',
            width: 100,
            align: 'right',
            footerData: 'deneme footer'
        },
        {
            dataField: 'name',
            headerText: 'Malzeme Tanımı',
            widthPercent: 50,
            align: 'left'
        },
        {
            dataField: 'main_group_name',
            headerText: 'Ana Grubu',
            dataType: 'date'
        },
        {
            dataField: 'group_name',
            headerText: 'Grubu',
            dataType: 'date'
        },
        {
            dataField: 'purchase_unit_name',
            headerText: 'S.Alma Birimi',
            dataType: 'date'
        },
        {
            dataField: 'min_stock',
            headerText: 'Min Stok',
            dataType: 'date'
        },
        {
            dataField: 'max_stock',
            headerText: 'Maks Stok',
            dataType: 'date'
        },
    ];

    FormItems = [
        new TextboxFormItem({
            type: FormTypes.Number,
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
        }),
        new TextboxFormItem({
            type: FormTypes.Text,
            label: 'Malzeme Tanımı',
            name: 'material_name',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Malzeme Kodu Gerekli Alandır'
                }
            ]
        }),
        new AutoCompleteFormItem({
            label: 'Malzeme Grubu',
            name: 'material_group',
            optionInitFunction: 'getMaterialGroups',
            validations: [
                {
                    name: 'required',
                    validator: Validators.required,
                    message: 'Malzeme Kodu Gerekli Alandır'
                }
            ],
        })
    ];
}
