import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { MemberService } from '../member.service';
import { MemberInterface } from '../interfaces/MemberInterface';
import { UpdateMemberComponent } from '../update-member/update-member.component';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[]= ['name1','alias','telephone','dateentry','Acciones'];

  constructor(private apiMember:MemberService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.apiMember.getMembers().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<MemberInterface>(data.result as MemberInterface[]);
      console.log(data);
    });
  }

  updateMember(member: MemberInterface){
    console.log(member);
    this.dialog.open(UpdateMemberComponent,{
      data: {
        name1: member.name1,
        name2:member.name2,
        alias:member.alias,
        telephone: member.telephone,
        dateentry:member.dateentry,
        id:member.idmember
      }
    });
  }

}
