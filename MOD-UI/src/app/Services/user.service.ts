import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import{User} from '../Models/user';
import{Observable}from 'rxjs';
import {Mentor} from '../Models/mentor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path:string='http://localhost:51267/user';
  constructor(private client:HttpClient) { }
  public GetAll():Observable<User[]>
  {
    return this.client.get<User[]>(this.path+'/GetAll');
  }
  public Add(item:User):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
  public Delete(id:string)
    {
        return this.client.delete(this.path+'/Delete/'+id);
    }
  public Block(id:string)
    {
      return this.client.put(this.path +'/BlockUser/'+id,id);
    }
    public SearchMentor(tech:string,time:string):Observable<Mentor[]>
    {
      return this.client.get<Mentor[]>(this.path+'/SearchMentor/'+tech+'/'+time);
    }
}
