import { Injectable } from '@angular/core';
import { Movies } from './movies';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class PassingdataService {


  id:number;
  adminLogin:boolean=false;
  userLogin:boolean=false;
  movie:Movies;
  numberOfTickets:number;
  user:Users;

  constructor() { }

  getUser()
  {
    return this.user;
  }

  setUser(user:Users)
  {
    this.user=user;
  }
  
  getTickets()
  {
    return this.numberOfTickets;
  }

  setTicket(numberOfTickets:number)
  {
    this.numberOfTickets=numberOfTickets;
  }

getMovie()
{
  return this.movie;
}


setMovie(movie:Movies)
{
this.movie=movie;
}

getId()
{
  return this.id;
}

postId(id:number)
{
  this.id=id;
}

getAdminLogin()
{
  return this.adminLogin;
}

postAdminLogin(adminLogin:boolean)
{
  this.adminLogin=adminLogin;
}

getUserLogin()
{
  return this.userLogin;
}

postUserLogin(userLogin:boolean)
{
  this.userLogin=userLogin;
}

}
