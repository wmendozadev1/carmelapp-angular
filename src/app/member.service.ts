import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl: string = 'https://localhost:44339/api/Members';

  constructor(private _http: HttpClient) { }

  getMembers()  {
    return this._http.get(this.baseUrl);

  }


}
