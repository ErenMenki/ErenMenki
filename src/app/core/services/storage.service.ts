import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getItem(key: string, isPermenant?: boolean): any {
    let value: string;
    if (isPermenant === undefined) {
      isPermenant = false;
    }
    if (isPermenant) {
      value = localStorage.getItem(key);
    } else {
      value = sessionStorage.getItem(key);
    }
    return value;
  }

  public setItem(key: string, value: any, isPermenant?: boolean): void {
    if (isPermenant === undefined) {
      isPermenant = false;
    }
    if (isPermenant) {
      localStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }
  }

  public deleteItem(key: string, isPermenant?: boolean): any {
    if (isPermenant === undefined) {
      isPermenant = false;
    }
    if (isPermenant) {
      localStorage.removeItem(key);
    } else {
      sessionStorage.removeItem(key);
    }
  }
}
