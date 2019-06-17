import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private userService : UserServiceService, private router : Router) { }
serverErrorMessage = '';

  model = {
    username :'',
    password : ''
  };



  ngOnInit() {
  }

  onSubmit(form : NgForm)
  {
    this.userService.loginCustomer(form.value).subscribe
    (
      res => {
        let x = res['_id']
        console.log(x);
        this.router.navigate(['/customerinput',x])
        //console.log(res)
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    )
  }
}
