import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItem } from '../form/FormItem';
import { MAT_DATE_LOCALE } from '@angular/material';

@Component({
  selector: 'vias-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'tr-TR' }]
})
export class DatepickerComponent implements OnInit {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  constructor() {}
  ngOnInit() {}
}
