import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { PassingdataService } from '../passingdata.service';
import { Movies } from '../movies';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username:string;
  password:string;
  users:Users[];
  newUser:Users=new Users();
  isLogin:boolean;
  regResponse:string;
  movies:Movies[];
  searchText:any;
  sortedMovies:Movies[]=[];

  constructor(private modalService: NgbModal,private router:Router,private movieservice:MovieService
    ,private passingdataservice:PassingdataService){}

  ngOnInit(): void {
    this.isLogin=this.passingdataservice.getUserLogin();
    // this.isLogin=true;
    this.getAllMovies();
    this.getAllUsers();

  }

  getAllUsers()
  {
    this.movieservice.GetAllUsers().subscribe(data =>{
      this.users=data;
      console.log(this.users);

    });
  }

  login()
  {
    for(let user of this.users)
    {
      if((user.name==this.username)&&(user.password==this.password))
      {
                   
          this.isLogin=true;
          this.passingdataservice.setUser(user);
          this.passingdataservice.postUserLogin(true);
        
      }
      console.log(this.isLogin);
    }
  }

  register()
  {

       this.movieservice.RegisterUser(this.newUser).subscribe(data =>{
       this.getAllUsers();
       this.newUser.name="";
       this.newUser.password="";
       this.newUser.email="";
       this.newUser.phone="";
     });
     this.regResponse="New user registered";
     


  }

  
 getAllMovies()
  {
    this.movieservice.GetAllMovie().subscribe(data=>{
          this.movies=data;
          for(let mov of this.movies)
          {
            if(mov.availability==true)
            {
              this.sortedMovies.push(mov);
            }
          }
    });
    
  }
  addToCart(movie:Movies)
  {
  this.passingdataservice.setMovie(movie);
 
    const modalRef = this.modalService.open(ModalComponent);
    
 

  
  
  }

  logout()
  {
    this.passingdataservice.postUserLogin(false);
    this.router.navigate([`home`]);

  }



}
