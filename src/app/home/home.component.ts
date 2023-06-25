import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassingdataService } from '../passingdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

isUserLogin:boolean;

constructor(private router:Router,private passingdataservice:PassingdataService){}
ngOnInit(): void {
  
}

adminLogin()
{
  this.router.navigate([`admin`]);
}



  buy()
  {
    this.router.navigate([`user`]);
  }
}
