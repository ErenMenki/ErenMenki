import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'vias-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['tr', 'en', 'fr']);
    translate.setDefaultLang('tr');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/tr|en|fr/) ? browserLang : 'tr');
  }
}
