import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

import { IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams, RowNode } from 'ag-grid-community';
import { IFilterAngularComp } from 'ag-grid-angular';
import { FilterOptions } from './datagrid.component';

@Component({
    selector: 'vias-filter-cell',
    template: `<select #filterSelect [ngModel]="filterSelect" (ngModelChange)="onChange($event)"></select>`,
})
export class AutoCompleteFilterComponent implements IFilterAngularComp, AfterViewInit {
    private params: IFilterParams;
    private valueGetter: (rowNode: RowNode) => any;
    public text: string = '';
    public value: number = -1;
    private options: Array<FilterOptions>;

    @ViewChild('filterSelect', { read: ViewContainerRef }) public theSelect;

    agInit(params: IFilterParams): void {
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
        const sel = this.theSelect.element.nativeElement;
        this.options.forEach(o => {
            const opt = document.createElement('option');
            opt.value = o.value.toString();
            opt.text = o.label;
            sel.add(opt, null);
        });
        window.setTimeout(() => {
            this.theSelect.element.nativeElement.focus();
        });
    }

    onChange(newValue): void {
        if (this.value !== newValue) {
            this.value = newValue;
            this.params.filterChangedCallback();
        }
    }
}
