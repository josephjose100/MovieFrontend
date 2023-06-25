import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Router } from '@angular/router';
import { PassingdataService } from '../passingdata.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private router:Router,private passingdataservice:PassingdataService){}
  user:Users;

  ngOnInit(): void {
    this.user=this.passingdataservice.getUser();
    console.log(this.user.name);
  }

goToHome()
{

  this.router.navigate([`home`]);
}
}
