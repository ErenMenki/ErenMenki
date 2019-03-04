import { Component, OnInit } from '@angular/core';
import { MenuService, MenuType } from '../services/menu.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'vias-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [MenuService]
})
export class NavComponent implements OnInit {
  currentLang = 'en';
  mt = MenuType;

  constructor(
    public menuService: MenuService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
  }

  addMenuItem(): void {
    this.menuService.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        { state: 'menu', name: 'MENU' },
        { state: 'timeline', name: 'MENU' }
      ]
    });
  }
}
