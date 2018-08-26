import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MembersAddComponent } from './members/members-add/members-add.component';

const appRoutes: Routes = [
  { path: 'members', component: MembersComponent, children: [
      { path: 'add', component: MembersAddComponent },
    ]
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MembersComponent,
    ProfileComponent,
    ReportsComponent,
    MembersListComponent,
    MembersAddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
