import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatTableModule, MatSortModule} from '@angular/material'
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './component/search-flight/search-flight.component';
import {SearchFlightService } from './service/search-flight.service'
import { ReactiveFormsModule } from '@angular/forms';
import * as moment from 'moment';


@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    
  ],
  providers: [SearchFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
