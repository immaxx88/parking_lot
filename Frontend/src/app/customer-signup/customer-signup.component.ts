import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css'],
  providers:[UserServiceService]
})
export class CustomerSignupComponent implements OnInit {

  constructor(private userService : UserServiceService) { }
  showSuccessMessage : boolean
  serverErrorMessage : boolean 

  ngOnInit() {
  }

  onSubmit(form : NgForm)
  {
    this.userService.postCustomer(form.value).subscribe(
      res => {
          this.showSuccessMessage=true;
          setTimeout(()=>this.showSuccessMessage = false,3000);
          this.resetForm(form);
      },
      err => {
        this.serverErrorMessage=true;
        setTimeout(()=> this.serverErrorMessage = false,3000)
      }
    )
  }

  resetForm(form : NgForm)
  {
    this.userService.customer = {
      name : '',
      username : '',
      password : ''
    };
    form.resetForm();

  }

}
