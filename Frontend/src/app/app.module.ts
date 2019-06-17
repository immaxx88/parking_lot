import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { CustomerInputDataComponent } from './customer-input-data/customer-input-data.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LiveParkingComponent } from './live-parking/live-parking.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    AdminControlComponent,
    CustomerInputDataComponent,
    CustomerDetailsComponent,
    LiveParkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
