import { ObjQueue } from './../models/object-queue';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoyScraperService {

  path = '';
  constructor(private _http: Http) { }

  occupateRoom(shopId: string, roomId: string, userPayload: ObjQueue): Observable<any> {
    return this._http.post(`${this.path}`, userPayload);
  }

}
