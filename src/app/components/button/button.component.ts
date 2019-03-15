import { Component, OnInit, Input } from '@angular/core';
import { FormItem } from '../form/form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vias-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  constructor() {}
  ngOnInit() {}
}
