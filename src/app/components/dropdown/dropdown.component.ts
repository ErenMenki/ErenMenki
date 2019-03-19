import { Component, OnInit, Input } from '@angular/core';
import { FormItem } from '../form/FormItem';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vias-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() item: FormItem;
  @Input() form: FormGroup;
  constructor() {}
  ngOnInit() {}
}
