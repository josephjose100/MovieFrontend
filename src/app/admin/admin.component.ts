import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { MovieService } from '../movie.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   constructor(private router:Router,private movieservice:MovieService){}

   admins:Admin[];
   name:string;
   password:string;
   admin:Admin;
   isLogin:boolean;
   isNewItem:boolean;
   movie:Movies=new Movies();
   selectedFile:File;
   fileSelected:boolean;
   movies:Movies[];

  ngOnInit(): void {
    this.isLogin=false;
    this.getAdmins();
    this.isNewItem=false;
    this.fileSelected=true;
    this.getAllMovies();
  }

  validateCredentials()
  {

    for (let admin of this.admins) {
      
      if((admin.name==this.name)&&(admin.password==this.password))
      {
        this.isLogin=true; 
      }   
  }
  }

  getAdmins()
  {
    this.movieservice.GetAllAdmins().subscribe(data =>{
      this.admins=data;
      console.log(this.admins);

    });
  }

  addMovie()
  {
    this.isNewItem=true;
  }

  onFileSelected(event:any)
  {
   if(event.target.files)
   {
     this.selectedFile=event.target.files[0];
     this.fileSelected=false;
     
   }
  }

  newMovie(frmNew:any)
  {
    console.log(this.movie);
    const formData = new FormData();
    formData.append('movie', JSON.stringify(this.movie));
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.movieservice.UploadDetails(formData).subscribe(data =>{
   
    //  this.getAllMedicine();
   this.movie.name="";
   this.movie.genre="";
   this.movie.description="";
   this.movie.language="";
   this.movie.price=0;
   this.movie.timing1="";
   this.movie.timing2="";
   this.movie.timing3="";
   

   
   });
  }

  getAllMovies()
  {
    this.movieservice.GetAllMovie().subscribe(data=>{
          this.movies=data;
    });
  }

  delete(id:number)
{
  let ch=confirm("do you want to delete");
  if(ch)
    {
      this.movieservice.DeleteItem(id).subscribe(data =>{
        this.getAllMovies();
      });
    }
  }

  update(id:number)
  {


  }

 

  enableDisable(id:number)
  {
    console.log(id);
    for(let mov of this.movies)
    {
      console.log(mov.id);
      if(mov.id==id)
      {
        this.movieservice.enableDisable(mov).subscribe(data=>{
        this.getAllMovies();

        });

      }
    }
   
  }
  
}
