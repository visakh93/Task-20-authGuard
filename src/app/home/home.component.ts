import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor( private apiCall :ApiServiceService){}
 
  min:number=0;
  count:number=20;
  max:number=this.count;
  dataList:any=[];
  url='https://jsonplaceholder.typicode.com/posts'

ngOnInit(){
  this.dataList= this.apiCall.getAll(this.min,this.max ,this.url);
  console.log(this.dataList,'data');

}
nextPage(){
  this.min=this.max;
  this.max += this.count
  this.dataList= this.apiCall.getAll(this.min,this.max,this.url);
  console.log(this.dataList);
}

PreviousPage(){
  if(this.min > 0 ){
  this.min = this.min- this.count;
  this.max=this.max - this.count;
  }

  this.dataList= this.apiCall.getAll(this.min,this.max,this.url);
  console.log(this.dataList);

}

}
