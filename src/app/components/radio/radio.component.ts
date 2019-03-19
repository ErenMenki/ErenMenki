import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormItem } from '../form/FormItem';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vias-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, OnChanges {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  constructor() {}
  ngOnInit() {}
  ngOnChanges() {}
}
