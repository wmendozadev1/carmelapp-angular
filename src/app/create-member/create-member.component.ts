import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { MemberService } from '../member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent  { // implements OnInit

  constructor(private apiMember: MemberService,
              private router: Router) { }

  /*ngOnInit(): void {
  }*/

  memberForm = new FormGroup({
    name1: new FormControl('',Validators.required),
    name2:new FormControl(''),
    alias: new FormControl(''),
    telephone: new FormControl()
  })

  onSubmit() {
    console.log(this.memberForm.value);
    this.apiMember.createMember(this.memberForm.value).subscribe((data:any)=> {
        alert("Miembro creado");
        this.router.navigate(['/members']);
    });
  }


}
