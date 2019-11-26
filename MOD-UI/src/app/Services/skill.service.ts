import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../Models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  path:string='http://localhost:51267/Skill';
  constructor(private client:HttpClient) { }
  public GetAll():Observable<Skill[]>
  {
    return this.client.get<Skill[]>(this.path+'/GetAll')
  }
  public Add(item:Skill):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
  public Update(item:Skill):Observable<any>
  {
    return this.client.put<any>(this.path+'/Update',item)
  }
  public Search(id:string):Observable<any>
  {
    return this.client.get<any>(this.path+'/GetSkillById/'+id)
  }

  public Delete(id:string)
    {
        return this.client.delete(this.path+'/Delete/'+id)
    }

    public GetName(name:string):Observable<Skill>
  {
    return this.client.get<Skill>(this.path+'/GetName/'+name);
  }

}
