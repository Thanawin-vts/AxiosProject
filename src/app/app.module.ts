import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { WnmoduleModule } from 'Wnmodule';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProfileComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WnmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
