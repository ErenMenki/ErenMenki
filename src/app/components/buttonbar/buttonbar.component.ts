import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum ButtonColors {
  Default = '',
  Primary = 'primary',
  Accent = 'accent',
  Warn = 'warn',
  Disabled = 'disabled'
}

export enum ButtonTypes {
  Submit,
  Button,
  Link,
  Toggle
}

export interface ButtonBarItem {
  label: string;
  name: string;
  color?: ButtonColors;
  icon?: string;
  onClick?: string;
}



@Component({
  selector: 'vias-buttonbar',
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.scss']
})
export class ButtonbarComponent implements OnInit {
  @Input() buttons: ButtonBarItem[];
  @Output() itemClick: EventEmitter<ButtonBarItem> = new EventEmitter<ButtonBarItem>();
  constructor() { }

  ngOnInit() {
  }

  buttonItemClick($event) {
    let buttonId = '';
    if($event.target['name']) {
      buttonId = $event.target['name'];
      const selection: ButtonBarItem = this.buttons.find(e => e['name'] === buttonId);
      if (selection) {
        this.itemClick.emit(selection);
      }
    }
  }
}
