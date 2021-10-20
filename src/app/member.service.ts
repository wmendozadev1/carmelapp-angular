import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { MemberInterface } from './interfaces/MemberInterface';




@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl: string = 'https://localhost:44339/api/Members';

  constructor(private _http: HttpClient) { }

  getMembers()  {
    return this._http.get(this.baseUrl);

  }

  createMember(member: MemberInterface) {
    return this._http.post(this.baseUrl,member);
  }

  updateMember(id:number, member:MemberInterface) {
    return this._http.put(this.baseUrl+id, member);
  }  


}
