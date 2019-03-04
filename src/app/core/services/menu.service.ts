import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}
export enum MenuType {
  title,
  link,
  sub,
  divider
}
export interface Menu {
  state?: string;
  name?: string;
  type: MenuType;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: MenuType.title,
    name: 'Satinalma'
  },
  {
    state: '/purchasing/materials',
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
      { state: 'purchaseRequest', name: 'Satinalma Talep' },
      { state: 'purchaseRequestReport', name: 'Talep Raporu' },
      { state: 'purchaseRequestDetailReport', name: 'Detayli Talep Raporu' },
    ]
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
    state: 'planning',
    name: 'Talep',
    type: MenuType.sub,
    icon: 'developer_board',
    children: [
      { state: 'purchaseRequest', name: 'Satinalma Talep' },
      { state: 'purchaseRequestReport', name: 'Talep Raporu' },
      { state: 'purchaseRequestDetailReport', name: 'Detayli Talep Raporu' },
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