import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export enum MenuType {
  title,
  link,
  sub,
  divider
}
export interface Menu {
  type: MenuType;
  state?: string;
  name?: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: Menu[];
}

const MENUITEMS = [
  {
    type: MenuType.title,
    name: 'purchasing'
  },
  {
    state: '/purchasing/material-list',
    name: 'Stok',
    type: MenuType.link,
    icon: 'table_chart',
    badge: [{ type: 'icon', value: 'home' }, { type: 'button', value: 'test2' }]
  },
  {
    state: '/purchasing/equipments',
    name: 'Takim Depo',
    type: MenuType.link,
    icon: 'table_pie'
  },
  {
    state: 'purchasing',
    name: 'Talep',
    type: MenuType.sub,
    icon: 'verified_user',
    children: [
      { state: 'list-request', name: 'Satınalma Talep', type: MenuType.link },
      { state: 'list-tender', name: 'Satınalma Teklif', type: MenuType.link },
      { state: 'purchaseRequestReport', name: 'Talep Raporu', type: MenuType.link },
      { state: 'purchaseRequestDetailReport', name: 'Detayli Talep Raporu', type: MenuType.link },
      { state: 'list-suppliers', name: 'Tedarikçi Listesi', type: MenuType.link },
    ]
  },
  {
    type: MenuType.divider
  },
  {
    type: MenuType.title,
    name: 'İnsan Kaynakları'
  },
  {
    state: '/hr/list-duty-codes',
    name: 'Hr Duty codes',
    type: MenuType.link,
    icon: 'bar_chart'
  },
  {
    state: '/hr/list-incident-scenes',
    name: 'Hr Incident Scenes',
    type: MenuType.link,
    icon: 'bar_chart'
  },
  {
    type: MenuType.divider
  },
  {
    type: MenuType.title,
    name: 'B/O Planlama'
  },
  {
    state: '/planning/projectList',
    name: 'Proje Listesi',
    type: MenuType.link,
    icon: 'bar_chart'
  },
  {
    state: '/repair-planning/edit-project',
    name: 'Proje Guncelle',
    type: MenuType.link,
    icon: 'bar_chart'
  },
  {
    state: 'planning',
    name: 'Talep',
    type: MenuType.sub,
    icon: 'developer_board',
    children: [
      { state: 'purchaseRequest', name: 'Satinalma Talep', type: MenuType.link },
      { state: 'purchaseRequestReport', name: 'Talep Raporu', type: MenuType.link },
      { state: 'purchaseRequestDetailReport', name: 'Detayli Talep Raporu', type: MenuType.link },
    ]
  },
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}