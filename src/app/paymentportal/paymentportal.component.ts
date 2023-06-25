import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassingdataService } from '../passingdata.service';
import { Movies } from '../movies';
import { Users } from '../users';

@Component({
  selector: 'app-paymentportal',
  templateUrl: './paymentportal.component.html',
  styleUrls: ['./paymentportal.component.css']
})
export class PaymentportalComponent implements OnInit{

  constructor(private router:Router,private passingdataservice:PassingdataService){}

  totalCost:number;
  name:string;
  cardno:number;
  date:Date;
  cvv:number;
  movie:Movies;
  numberOftickets:number;
  user:Users;
  ngOnInit(): void {
    this.movie=this.passingdataservice.getMovie();
    this.numberOftickets=this.passingdataservice.getTickets();
    this.totalCost=this.movie.price * this.numberOftickets;
    this.user=this.passingdataservice.getUser();
  }

  goToConfirmation()
  {
    console.log(this.user.name);
    this.router.navigate([`confirm`]);
  }
}
