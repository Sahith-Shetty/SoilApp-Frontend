import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoildetailsComponent } from './soildetails/soildetails.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SoilsearchComponent } from './soilsearch/soilsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    SoildetailsComponent,
    SoilsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
