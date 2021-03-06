import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';


export interface Notice {
  text: string;
  subtext?: string;
  date?: number;
  icon: string;
  color?: string;
}

const NOTIFICATIONITEMS = [
  {
    text: 'Social',
    subtext: 'Ligula Purus Adipiscing',
    icon: 'people',
    color: 'primary'
  },
  {
    text: 'Promotions',
    subtext: 'Etiam Ligula Dapibus',
    icon: 'local_offer',
    color: 'warn'
  },
  {
    text: 'Updates',
    subtext: 'Sollicitudin Euismod Fringilla',
    icon: 'info',
    color: 'accent'
  },
  {
    text: 'Removed 6 items from task list',
    date: 1427207139000,
    icon: 'delete_sweep'
  },
  {
    text: 'Completed 2 projects',
    date: 1427412725000,
    icon: 'check_circle'
  },
  {
    text: 'Muted notifications',
    date: 1427546580000,
    icon: 'notifications_paused'
  },
  {
    text: 'Added Joel to contact list',
    date: 1428275520000,
    icon: 'person_add'
  },
  {
    text: 'Missed live call from Ellie',
    date: 1428830580000,
    icon: 'phone_missed'
  },
  {
    text: "You've been added to HR group",
    date: 1429363920000,
    icon: 'group_add'
  }
];

@Injectable()
export class NotificationService {
  getAll(): Notice[] {
    return NOTIFICATIONITEMS;
  }
}


@Component({
  selector: 'vias-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NotificationService]
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  constructor(
    public notificationService: NotificationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'search-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg')
    );
  }

  ngOnInit() {
  }

}
