import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent implements OnInit {

  constructor(private userService : UserServiceService,private router : Router) { }
model = {
gridno : 0
}

//sizeLimitValue : number

showErrorMessage : boolean;
getGridError : boolean;

  ngOnInit() {
   // console.log(this.sizeLimitValue)
  }

  onSubmit(form : NgForm)
  {
  this.userService.postGridNo(form.value).subscribe(
    res => {
      alert("Grid Initialized");
    },
    err => {
      this.showErrorMessage = true;
    }
  )
}


onGridCall()
{
  this.userService.getGridno()
  .subscribe(
    res => {
      let x = res['user'] 
      let y = x.gridno
      //this.sizeLimitValue = y
      this.router.navigate(['/liveparking',y])
    },
    err => {
      this.getGridError = true
    }
  
)
}

}
