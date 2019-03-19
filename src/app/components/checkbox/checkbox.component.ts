import { Component, OnInit, Input } from '@angular/core';
import { FormItem } from '../form/FormItem';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vias-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  constructor() {}
  ngOnInit() {}
}
