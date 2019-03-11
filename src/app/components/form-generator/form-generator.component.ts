import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormItem } from './form-item';
import { FormService } from './form.service';

export class FormEvent {
  data: object;
}

@Component({
  selector: 'vias-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  @Input() formItems: FormItem<any>[] = [];
  form: FormGroup;
  @Output() formSubmit = new EventEmitter<FormEvent>();

  constructor( private formService: FormService) { }

  ngOnInit() {
    this.form = this.formService.toFormGroup(this.formItems);
  }

  onSubmit() {
    let event = new FormEvent();
    event.data = this.form.value;
    this.formSubmit.emit(event);
  }
}
