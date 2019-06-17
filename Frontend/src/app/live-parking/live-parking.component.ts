import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
declare var $: any;

@Component({
  selector: 'app-live-parking',
  templateUrl: './live-parking.component.html',
  styleUrls: ['./live-parking.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LiveParkingComponent implements OnInit {


  constructor(private route: ActivatedRoute ,private renderer : Renderer2,private userService : UserServiceService) { }
  idno: number;
  
  getSlot(i : number)
  {
    console.log(i);
    this.userService.getSlotDetails(i).subscribe(
      res => {
        console.log(res);
      },
      err => {
        alert("Slot is Empty");
      }
    )
  }


   ngOnInit() {
    this.route.params.subscribe(params => {
      this.idno = +params['id'];
     for (let i=1 ; i<= this.idno ; i++)
     {
      var $btn = $(`<button  id="str${i}"> ${i} </button>`).on("click",function(i){
        this.getSlot(i)
      //console.log("Jquery Function")
      })
      $("#gridForm").append($btn);
     } 
  })
  }
}