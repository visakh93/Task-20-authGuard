import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService  } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
constructor(private loginService:LoginServiceService,private router:Router){}  
  userData={
    name:'',
    password:'',
  }
  
  ngOnInit() {
    
  }
  onSubmit(){
    this.loginService.setData(this.userData);
    localStorage.setItem('login',JSON.stringify(this.userData));
this.router.navigate(['./home']);
  }
}
