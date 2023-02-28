import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
constructor(private router:Router,private loginService:LoginServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let storedData=localStorage.getItem("login");
    let logData
    if(storedData!=null){
     logData= JSON.parse(storedData)
    }
    // console.log(logData);
    
    
    let name=logData.name;
    let password =logData.password;
    

    if(name=='admin'&&password=='admin123'){
      return true;
    }else{
      return false
    }
    
    // if(logData === ''){
    //   return false
    // }else{
    //   return true;
    // }
    
    // if(value){
    //   return true;
      
    // }else{
    //   this.router.navigate(['./login']);
    //   return false;
    // }
      
  }
  
}
