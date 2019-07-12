import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormItem } from '../form/FormItem';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'vias-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnChanges {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  @Output() onchange: EventEmitter<Object> = new EventEmitter<Object>();
  filteredOptions: Observable<object[]>;
  myControl: FormControl;
  constructor() { }
  ngOnInit() {
    if (!this.item.options) {
      this.item.options = [{ label: '', data: '' }];
    }
  }
  ngOnChanges(changes) {
    this.myControl = this.form.get(this.item.name) as FormControl;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => value ? this._filter(value) : this.item.options)
    );
  }
  onSelected($event: MatAutocompleteSelectedEvent) {
    this.onchange.emit($event.option.value);
  }
  private _filter(value: string): object[] {
    const filterValue = typeof (value) === 'string' ? value.toLowerCase() : '';
    return this.item.options.filter(option =>
      option['label'].toLowerCase().indexOf(filterValue) === 0
    );
  }
  public valueMapper = (key) => {
    const selection = this.item.options.find(e => e['data'] === key);
    if (selection) {
      return selection['label'];
    }
  }
}
