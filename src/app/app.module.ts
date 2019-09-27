import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { PrincipalComponent } from '../pages/principal/principal.component';
import {Angular2UsefulSwiperModule} from "angular2-useful-swiper";
import {MatIconModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2UsefulSwiperModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
