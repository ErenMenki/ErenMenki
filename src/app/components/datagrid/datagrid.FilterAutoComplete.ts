import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

import { IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams, RowNode } from 'ag-grid-community';
import { IFilterAngularComp } from 'ag-grid-angular';
import { FilterOptions } from './datagrid.component';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { FormItem } from '../form/FormItem';
import { FieldTypes } from 'src/app/core/FieldTypes';

@Component({
    selector: 'vias-filter-cell',
    // template: `<select #filterSelect [ngModel]="filterSelect" (ngModelChange)="onChange($event)"></select>`,
    template: `<vias-autocomplete [form]="form" [item]="item" (onchange)="onChange($event)"></vias-autocomplete>`,
})
export class AutoCompleteFilterComponent implements IFilterAngularComp, AfterViewInit {
    private params: IFilterParams;
    private valueGetter: (rowNode: RowNode) => any;
    public text: string = '';
    public value: number = -1;
    private options: Array<FilterOptions>;
    form: FormGroup;
    item: FormItem;

    @ViewChild('filterSelect', { read: ViewContainerRef }) public theSelect;

    agInit(params: IFilterParams): void {
        this.form = new FormGroup({filterSelect: new FormControl()});
        this.item = {
            type: FieldTypes.AutoComplete,
            name: 'filterSelect',

        };
        this.params = params;
        this.valueGetter = params.valueGetter;
        if (params.colDef.filterParams !== null) {
            this.options = params.colDef.filterParams.filterDataSource as Array<FilterOptions>;
        }
    }

    isFilterActive(): boolean {
        return this.value !== null && this.value !== undefined && this.value !== -1;
        // return this.text !== null && this.text !== undefined && this.text !== '';
    }

    doesFilterPass(params: IDoesFilterPassParams): boolean {
        // Burasi iptal
        // cunku db ye gidecek. hep true gelmesi lazim...
        return true;
        // const val: any = params.data[this.params.colDef.field];
        // // tslint:disable-next-line: radix
        // return this.value === parseInt(val);
    }

    getModel(): any {
        return { value: this.value };
    }

    setModel(model: any): void {
        this.value = model ? model.value : -1;
    }

    // ngAfterViewInit(params: IAfterGuiAttachedParams): void {
    ngAfterViewInit(): void {
        this.item.options = [];
        this.options.forEach(o => {
            this.item.options.push(
                {
                    label: o.label,
                    data: o.value.toString()
                }
            );
        });
    }

    onChange(newValue): void {
        if (this.value !== newValue) {
            this.value = newValue;
            this.params.filterChangedCallback();
        }
    }
}
