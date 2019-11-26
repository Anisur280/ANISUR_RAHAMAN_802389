import { Injectable } from '@angular/core';
import { Training } from '../Models/training';
import { Mentor } from '../Models/mentor';
import { Payment } from '../Models/payment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  item2:Training;
  item:Mentor;
  skillFee:number;
  duration:number;
  toc:string;
  item3:Payment;
  path:string='http://localhost:51267/Payment';
  
    constructor(private client: HttpClient) { }
    paydetails(item2:Training,item:Mentor,skillFee){
     this.item2=item2;
     this.item=item;
     this.skillFee=skillFee;

    }
  
    public Add(item3:Payment):Observable<any>
    {
      return this.client.post<any>(this.path+'/Add',item3)
    }
  }
  