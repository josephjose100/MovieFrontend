import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { PassingdataService } from '../passingdata.service';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

movie:Movies=new Movies();
selectedFile:File;
fileSelected:boolean=true;
constructor(private passingdataservice:PassingdataService,private movieservice:MovieService
  ,private router:Router){}



  ngOnInit(): void {
    this.movie.id=this.passingdataservice.getId();
  }

  updateMovie(frmUpdate:any)
  {
    console.log(this.movie);
    const formData = new FormData();
    formData.append('movie', JSON.stringify(this.movie));
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.movieservice.UploadDetails(formData).subscribe(data =>{
   
   
   this.movie.name="";
   this.movie.genre="";
   this.movie.description="";
   this.movie.language="";
   this.movie.price=0;
   this.movie.timing1="";
   this.movie.timing2="";
   this.movie.timing3="";
   this.router.navigate([`admin`]);

   
   });
  }

  onFileSelected(event:any)
  {
   if(event.target.files)
   {
     this.selectedFile=event.target.files[0];
     this.fileSelected=false;
     
   }
  }
}
