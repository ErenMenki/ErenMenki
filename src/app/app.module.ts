import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Globals
import { GlobalsService } from './core/services/globals.service';
// vias service
import { ViasConnectionService } from './core/services/vias-connection.service';

// Angular Material
import {
  MatSidenavModule,
  MatExpansionModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatListModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';
// Angular Flexlayout
import { FlexLayoutModule } from '@angular/flex-layout';
// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// ngx-loading-bar
import { LoadingBarModule } from '@ngx-loading-bar/core';
// ngx-perfect-scrollbar
import {
  PerfectScrollbarModule, 
  PERFECT_SCROLLBAR_CONFIG, 
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavComponent } from './core/nav/nav.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { AccordionLinkDirective } from './core/nav-accordion/accordionlink.directive';
import { AccordionAnchorDirective } from './core/nav-accordion/accordionanchor.directive';
import { AccordionDirective } from './core/nav-accordion/accordion.directive';
import { ComponentsModule } from './components/components.module';
import { DenemeComponent } from './deneme/deneme.component';

// Translation Script
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// Scrollbar config
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    AccordionDirective,
    AccordionLinkDirective,
    AccordionAnchorDirective,
    DenemeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MatExpansionModule,
    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    LoadingBarModule,
    PerfectScrollbarModule,
    ComponentsModule
  ],
  providers: [
    GlobalsService,
    ViasConnectionService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    ComponentsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
