import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }
loginData={
  name:'',
  password:''
}
name:any;
password:any;
  setData( value:any){
this.loginData.name=value.name;
this.loginData.password=value.password;
  }
  getData(){
    
    this.name=this.loginData.name;
    this.password=this.loginData.password;
    console.log(this.name);
    console.log(this.password);
    
    
    if(this.name==='admin'&& this.password=="admin123"){
      return true;
    }else{
      return false;
    }
  }
}
