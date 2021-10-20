import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { MemberService } from '../member.service';



@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  formUpdate:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateMemberComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {name1:string,name2:string,alias:string,telephone:string,dateentry:string,idmember:number}
              , private apiMember: MemberService,
              private router:Router
              ) {
                  this.id=data.idmember;
                  this.formUpdate=fb.group({
                    name1:[data.name1,Validators.required],
                    name2:[data.name2],
                    alias:[data.alias],
                    telephone:[data.telephone],
                    dateentry:[data.dateentry],
                  })
               }

               close(){
                 this.dialogRef.close();
               }

               save(){
                 console.log(this.formUpdate.value);
                 console.log('Valor idmember :' + this.id);
                 /*this.formUpdate.value.id = this.id;
                 this.apiMember.updateMember(this.id,this.formUpdate.value).subscribe((data)=> {
                   this.router.navigate(['/members']);
                   window.location.reload();
                 });
                 this.dialogRef.close();
                 */
               }

  ngOnInit(): void {
  }

}
