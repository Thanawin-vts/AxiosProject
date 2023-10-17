import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { Test1Module } from 'wn-test-lib/dist/test1'
import { DateFormatterModule } from 'wn-formatter/dist/date-formatter'
// import { DateFormatterModule } from 'date-formatter';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProfileComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Test1Module,
    DateFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
