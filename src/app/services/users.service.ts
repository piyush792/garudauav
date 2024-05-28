import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private SERVER_URL: string = "http://localhost:3000";

  constructor(private _http: HttpClient, private router: Router) {
  }

  getUsersLists(): Observable<any> {
    return this._http.get(this.SERVER_URL + '/users', httpOptions);
  }

  edit(id:number){
    return this._http.get(this.SERVER_URL + '/users/'+id);
  }

  addUser(data:any):Observable<any>{
    return this._http.post(this.SERVER_URL+'/users', data);
  }

  updateUser(data:any):Observable<any>{
    console.log(data);
    return this._http.put(this.SERVER_URL+'/users/'+data.id, data);
  }



}
