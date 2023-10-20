import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WndatamapperModule } from 'wndatamapper';
import { WninputpatternModule } from 'wninputpattern';
import { DateFormatterModule } from 'wn-formatter/dist/date-formatter'
import { WndashboardModule } from 'wndashboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
