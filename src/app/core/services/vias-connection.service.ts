import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Globals
import { GlobalsService } from './globals.service';

export interface ViasResponse {
  sid: string;
  pid: number;
  aid: number;
  return_action: string;
  error: string[];
  perm: string;
  permission: boolean[];
  data: object;
}

@Injectable({
  providedIn: 'root'
})
export class ViasConnectionService {
  private serverUrl: string;

  constructor(private globals: GlobalsService, private http: HttpClient) {
    // global degiskeni sinif propertysine ata
    this.serverUrl = globals.serverURL;
  }

  public send(pid: number, aid: number, data: object): Promise<ViasResponse> {
    return new Promise((resolve, reject) => {
      let debugStr: string = 'json= 1&';
      debugStr += 'pid=' + pid.toString() + '&';
      debugStr += 'aid=' + aid.toString() + '&';
      debugStr += 'data=' + JSON.stringify(data);
      console.log(debugStr);
      const params: FormData = new FormData();
      params.append('json', '1');
      params.append('pid', pid.toString());
      params.append('aid', aid.toString());
      params.append('data', JSON.stringify(data));
      this.http.post(this.serverUrl, params, { withCredentials: true })
        .toPromise()
        .then(
          res => {
            resolve(res as ViasResponse);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
