import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MemberService } from './member.service';

import { AppRouterModule } from './app-router.module';
import { CreateMemberComponent } from './create-member/create-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    FooterComponent,
    HeaderComponent,
    CreateMemberComponent
  ],
  imports: [
    BrowserModule, AppRouterModule,HttpClientModule, BrowserAnimationsModule,
    MatButtonModule,MatTableModule,ReactiveFormsModule,MatInputModule,MatCardModule,
    MatToolbarModule
  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
