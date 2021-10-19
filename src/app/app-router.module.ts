
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { MembersComponent } from "./members/members.component";

const routes : Routes = [
    { path: '',pathMatch:'full', component: MembersComponent },
    { path: 'members',pathMatch:'full', component: MembersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule { }

