import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { IDoesFilterPassParams, IFilterParams, RowNode } from 'ag-grid-community';
import { IFilterAngularComp } from 'ag-grid-angular';
import { FilterOptions } from './datagrid.component';

@Component({
    selector: 'vias-text-cell',
    template: `<input #filterText [ngModel]="filterText" (ngModelChange)="onChange($event)"/>`,
})
export class TextFilterComponent implements IFilterAngularComp, AfterViewInit {
    private params: IFilterParams;
    private isLocalRefresh: boolean;
    public value: string = '';
    public valueGetter;

    @ViewChild('filterText') public theText: ElementRef;

    agInit(params: IFilterParams): void {
        this.params = params;
        this.valueGetter = params.valueGetter;
        this.isLocalRefresh = params['isLocalRefresh'];
    }

    isFilterActive(): boolean {
        return this.value !== null && this.value !== undefined && this.value !== '';
    }

    doesFilterPass(params: IDoesFilterPassParams): boolean {
        if (this.isLocalRefresh) {
            return this.value.toLowerCase()
            .split(' ')
            .every((filterWord) => {
                return this.valueGetter(params.node).toString().toLowerCase().indexOf(filterWord) >= 0;
            });
        } else {
            //  db ye gidecek. hep true gelmesi lazim...
            return true;
        }
    }

    getModel(): any {
        return { value: this.value };
    }

    setModel(model: any): void {
        this.value = model ? model.value : '';
    }

    ngAfterViewInit(): void {
        window.setTimeout(() => {
            this.theText.nativeElement.focus();
            this.theText.nativeElement.value = this.value;
        });
    }

    onChange(newValue): void {
        if (this.value !== newValue) {
            this.value = newValue;
            this.params.filterChangedCallback();
        }
    }
}
