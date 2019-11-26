import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import{Mentor} from '../Models/mentor';
import{Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  path:string='http://localhost:51267/mentor';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetAll');
  }
  public Add(item:Mentor):Observable<any>
  {
    return this._client.post<any>(this.path+'/Add',item)
  }
  public Delete(id:string)
    {
        return this._client.delete(this.path+'/Delete/'+id);
    }
}

