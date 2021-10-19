import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private apiMember:MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.apiMember.getMembers().subscribe((data:any) => {
      console.log(data);
    });
  }

}
