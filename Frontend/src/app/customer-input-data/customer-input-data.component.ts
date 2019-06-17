import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-input-data',
  templateUrl: './customer-input-data.component.html',
  styleUrls: ['./customer-input-data.component.css']
})
export class CustomerInputDataComponent implements OnInit {

 custoid : string = '';

  constructor(private userService : UserServiceService,private route: ActivatedRoute ,private renderer : Renderer2) { }
  showSuccessMessage : boolean
  serverErrorMessage : boolean 

  ngOnInit() {
    this.onLoad()
  }

  onLoad()
  {
    this.route.params.subscribe(params => {
      this.custoid = params['id']
      console.log(this.custoid)
      this.userService.customersData.custid= this.custoid;
  })
}

parkCarDetails(form : NgForm)
{
  //console.log(form.value)
this.userService.getParkCarDetails(form.value).subscribe(
    res => {
      //logged it for now 
      console.log(res)
    },
    err => {
      alert("Something's Wrong")
    }
)
}

 onSubmit(form : NgForm)
 {
   this.userService.postCustomersData(form.value).subscribe(
     res => {
        this.showSuccessMessage = true;
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
    this.userService.customersData = {
      slot : '',
      modelno : '',
      regisno : '',
      color : '',
      custid : ''
    };
    form.resetForm();

  }

  }
