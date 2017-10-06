import { ObjQueue } from './../models/object-queue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MicroserviceService {

  path = 'http://h2729551.stratoserver.net:9090';
  constructor(private _http: HttpClient) { }

  occupateRoom(shopId: string, roomId: string, userPayload: ObjQueue): Observable<any> {
    return this._http.post(`${this.path}/${shopId}/${roomId}`, { user: userPayload});
  }

  desoccupateRoom(shopId: string, roomId: string): Observable<any> {
    return this._http.post(`${this.path}/${shopId}/${roomId}`, {});
  }

}
