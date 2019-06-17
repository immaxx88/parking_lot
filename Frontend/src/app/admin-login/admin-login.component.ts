import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  model = {
    username :'',
    password : ''
  }
  showErrorMessage : boolean
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    if(form.value.username == "root" && form.value.password == "root")
    {
      // console.log(form.value.username)
      this.router.navigateByUrl("/admincontrol")
    }
    else{
      this.showErrorMessage= true
    }
  }

}
