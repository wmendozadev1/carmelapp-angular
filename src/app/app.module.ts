import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MemberService } from './member.service';

import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, AppRouterModule,HttpClientModule, BrowserAnimationsModule,
    MatButtonModule,MatTableModule
  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
