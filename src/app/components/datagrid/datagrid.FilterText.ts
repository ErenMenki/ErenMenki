import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

import { IDoesFilterPassParams, IFilterParams, RowNode } from 'ag-grid-community';
import { IFilterAngularComp } from 'ag-grid-angular';
import { FilterOptions } from './datagrid.component';

@Component({
    selector: 'vias-text-cell',
    template: `<input #filterText [ngModel]="filterText" (ngModelChange)="onChange($event)"/>`,
})
export class TextFilterComponent implements IFilterAngularComp, AfterViewInit {
    private params: IFilterParams;
    private valueGetter: (rowNode: RowNode) => any;
    public text: string = '';
    public value: string = '';
    private options: Array<FilterOptions>;

    @ViewChild('filterText', { read: ViewContainerRef }) public theText;

    agInit(params: IFilterParams): void {
        this.params = params;
        this.valueGetter = params.valueGetter;
        if (params.colDef.filterParams !== null) {
            this.options = params.colDef.filterParams.filterDataSource as Array<FilterOptions>;
        }
    }

    isFilterActive(): boolean {
        return this.value !== null && this.value !== undefined && this.value !== '';
    }

    doesFilterPass(params: IDoesFilterPassParams): boolean {
        //  db ye gidecek. hep true gelmesi lazim...
        return true;
        // ornek
        // return this.value.toLowerCase()
        // .split(" ")
        // .every((filterWord) => {
        //     return this.valueGetter(params.node).toString().toLowerCase().indexOf(filterWord) >= 0;
        // });
    }

    getModel(): any {
        return { value: this.value };
    }

    setModel(model: any): void {
        this.value = model ? model.value : '';
    }

    ngAfterViewInit(): void {
        window.setTimeout(() => {
            this.theText.element.nativeElement.focus();
        });
    }

    onChange(newValue): void {
        if (this.value !== newValue) {
            this.value = newValue;
            this.params.filterChangedCallback();
        }
    }
}
