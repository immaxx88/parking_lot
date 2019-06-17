import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { environment } from 'src/environments/environment';
import { CustomerData } from './customer-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
customer : User = {
name : '',
username : '',
password : ''
}

customersData : CustomerData = {
  slot : '',
  modelno : '',
  regisno : '',
  color : '',
  custid : ''
}

  constructor(private http : HttpClient) { }

  postCustomer(customerdata : User)
  {
    return this.http.post(environment.apiBaseURL+'/registercustomer',customerdata)
  }

  postCustomersData (customersData : CustomerData)
  {
    return this.http.post(environment.apiBaseURL+'/registercustomerdata',customersData)
  }

  loginCustomer(authCredentials)
  {
    return this.http.post(environment.apiBaseURL+'/logincustomer',authCredentials)
  }

  postGridNo(gridData)
  {
    return this.http.put(environment.apiBaseURL+'/griddata',gridData)
  }

  getSlotDetails(i)
  {
    return this.http.get(environment.apiBaseURL+'/getslotdetails',i)
  }
  
  getGridno()
  {
    return this.http.get(environment.apiBaseURL+'/getgridno')
    
  }
  getParkCarDetails(temp)
  {
    //console.log(custid)
    return this.http.get(environment.apiBaseURL+'/getcustomerdetails',temp)
  }
}
