import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MemberService } from '../member.service';

import { MemberInterface } from '../interfaces/MemberInterface';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[]= ['name1','alias','telephone','dateentry'];

  constructor(private apiMember:MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.apiMember.getMembers().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<MemberInterface>(data.result as MemberInterface[]);
      console.log(data);
    });
  }

}
