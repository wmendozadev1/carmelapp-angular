import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent  { // implements OnInit

  constructor() { }

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
  }


}
