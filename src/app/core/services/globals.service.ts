import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
  // App Title
  public appTitle: string = 'viaShipyard';
  // server url
  public serverURL: string = 'http://vias.kuzeyshipyard.com/vias/';
  public selectedFirmId: number;
  public appVersion: string;
  public appVersionLabel: string;
  public langLocale: string = 'tr_TR';
  public langId: number = 1;
  // php session id
  public sid: string;
  // kullanici id
  public userId: number = 0;
  // kullanici ad soyad
  public userName: string = '';
  public selectedModuleId: number;
  public prefId: string = '';
  public userSectionId: number;
  public userDepartmentId: number;
  public userDefaultModuleId: number;
  public userDefaultPageId: number;
  public userDefaultActionId: number;

  public getAppTitle(moduleName: string): string {
    return this.appTitle + (moduleName.length > 0 ? ' - ' + moduleName : '');
  }
  public getUserName(): string {
    return this.userName;
  }
  public isLoggedIn(): boolean {
    return this.userId > 0 ? true : false;
  }
}
