import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class GlobalsService {
  // App Title
  public appTitle: string = 'viaShipyard';
  // server url
  public serverURL: string = 'http://vias.kuzeyshipyard.com/vias/';
  public selectedFirmId: number = 2;
  public appVersion: string;
  public appVersionLabel: string;
  public langLocale: string = 'tr_TR';
  public langId: number = 1;
  // php session id
  public sid: string;

  public selectedModuleId: number;
  public prefId: string = '';

  // kullanici id
  get userId(): number {
    return parseInt(this.storage.getItem('userId'), 10);
  }
  set userId(t: number) {
    this.storage.setItem('userId', t);
  }
  // kullanici adi permanent !!!
  get rememberLoginName(): string {
    return this.storage.getItem('rememberLoginName', true);
  }
  set rememberLoginName(t: string) {
    this.storage.setItem('rememberLoginName', t, true);
  }
  // kullanici ad soyad
  get userNameSurname(): string {
    return this.storage.getItem('userNameSurname');
  }
  set userNameSurname(t: string) {
    this.storage.setItem('userNameSurname', t);
  }
  // userSectionId: number;
  get userSectionId(): number {
    return parseInt(this.storage.getItem('userSectionId'), 10);
  }
  set userSectionId(t: number) {
    this.storage.setItem('userSectionId', t);
  }
 //  userDepartmentId: number;
  get userDepartmentId(): number {
    return parseInt(this.storage.getItem('userDepartmentId'), 10);
  }
  set userDepartmentId(t: number) {
    this.storage.setItem('userDepartmentId', t);
  }
  // userDefaultModuleId: number;
  get userDefaultModuleId(): number {
    return parseInt(this.storage.getItem('userDefaultModuleId'), 10);
  }
  set userDefaultModuleId(t: number) {
    this.storage.setItem('userDefaultModuleId', t);
  }
  // userDefaultPageId: number;
  get userDefaultPageId(): number {
    return parseInt(this.storage.getItem('userDefaultPageId'), 10);
  }
  set userDefaultPageId(t: number) {
    this.storage.setItem('userDefaultPageId', t);
  }
  // userDefaultActionId: number;
  get userDefaultActionId(): number {
    return parseInt(this.storage.getItem('userDefaultActionId'), 10);
  }
  set userDefaultActionId(t: number) {
    this.storage.setItem('userDefaultActionId', t);
  }

  constructor (public storage: StorageService) {}

  public getAppTitle(moduleName: string): string {
    return this.appTitle + (moduleName.length > 0 ? ' - ' + moduleName : '');
  }
  public isLoggedIn(): boolean {
    return this.userId > 0 ? true : false;
  }
}
