import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  path:string='http://localhost:51267/Training';
  item1:Training;
 
  constructor(private _client: HttpClient) {
   }
training(item1:Training){
  this.item1 = item1;
  
}
  public GetAll():Observable<Training[]>{
    return this._client.get<Training[]>(this.path+'/GetAll');
  }
  public CompletedTraining(mentorId):Observable<Training[]>{
    return this._client.get<Training[]>(this.path+'/CompletedTraining/'+ mentorId);
  }

  public CurrentTraining(mentorId):Observable<Training[]>{
    return this._client.get<Training[]>(this.path+'/CurrentTraining/'+mentorId);
  }
  public Add(item:Training):Observable<any>
  {
    return this._client.post<any>(this.path+'/Add',item)
  }
}


