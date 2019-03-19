import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItem } from '../form/FormItem';

@Component({
  selector: 'vias-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  constructor() {}
  ngOnInit() {}
}
