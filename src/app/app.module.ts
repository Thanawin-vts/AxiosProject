import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateFormatterModule } from 'wn-formatter/dist/date-formatter'
import { WndatamapperModule } from 'wndatamapper';
import { WninputpatternModule } from 'wninputpattern';
import { WndashboardModule } from 'wndashboard';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    WndatamapperModule,
    WninputpatternModule,
    DateFormatterModule,
    WndashboardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
