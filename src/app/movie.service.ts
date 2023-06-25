import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { Movies } from './movies';
import { Users } from './users';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpclient:HttpClient) { }

  private baseUrl="http://localhost:8080";

  GetAllAdmins():Observable<Admin[]>{

    return this.httpclient.get<Admin[]>(`${this.baseUrl}/admin`);
  }

  GetAllUsers():Observable<Users[]>{

    return this.httpclient.get<Users[]>(`${this.baseUrl}/user`);
  }

  RegisterUser(User:Users):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/user`,User);
  }

  UploadDetails(formData:any):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/movie`,formData)
   }

   GetAllMovie():Observable<Movies[]>{

    return this.httpclient.get<Movies[]>(`${this.baseUrl}/movie`);
   }

   enableDisable(movie:Movies):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/availability`,movie);
  }

  DeleteItem(id:number):Observable<Object>{

    return this.httpclient.delete(`${this.baseUrl}/movie/${id}`);
   }

}
