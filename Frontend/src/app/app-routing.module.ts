import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { CustomerInputDataComponent } from './customer-input-data/customer-input-data.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LiveParkingComponent } from './live-parking/live-parking.component';

const routes: Routes = [
  {
  path : 'home', component : HomeComponent
},
{
  path : 'adminlogin', component : AdminLoginComponent
},
{
  path : 'customerlogin', component : CustomerLoginComponent
},
{
  path : 'admincontrol', component : AdminControlComponent
},
{
  path : 'customerinput/:id', component : CustomerInputDataComponent
},
{
  path : 'customersignup', component : CustomerSignupComponent
},
{
  path : 'customerdetails', component : CustomerDetailsComponent
}, 
 {
  path : 'liveparking/:id', component : LiveParkingComponent
  },
  {
    path : '', component : HomeComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
