import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StaffComponent } from './staff/staff.component';
import { DateFormatterModule } from 'wn-formatter/projects/date-formatter/src/lib/date-formatter.module';

@NgModule({
  declarations: [
    AppComponent,
    // StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DateFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
