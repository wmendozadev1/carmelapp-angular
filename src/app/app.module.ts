import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserModule, AppRouterModule,HttpClientModule
  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
