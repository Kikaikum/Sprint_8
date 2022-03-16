import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(private ruta:Router) { }
  authlocal=localStorage.getItem('logged');
  loginstatusSubject = new Subject<boolean>();
  loginStatus$=this.loginstatusSubject.asObservable();
  
  getregistro(data:any){    
    localStorage.setItem(data.user,data.password);    
    localStorage.setItem('logged','true');
    this.loginstatusSubject.next(true);
    this.ruta.navigate(['']);
  }
  getlogin(data:any){
    let dato=localStorage.getItem(data.user);    
    if (data.password==dato){
      localStorage.setItem('logged','true');
      this.loginstatusSubject.next(true);      
      this.ruta.navigate(['']);      
    }
    else{
      alert("USUARIO Y CONTRASEÑA INCORRECTOS")
      

    }
  }
  gotoRegister(){
    this.ruta.navigate(['register']);
  }
  gotoLogin(){
    this.ruta.navigate(['login']);
  }
  logout(){
    localStorage.setItem('logged','false');
    this.loginstatusSubject.next(false);   
    this.ruta.navigate(['']);
  }
  isLogin(){
    this.authlocal=localStorage.getItem('logged');
    if(this.authlocal=='true'){
      return true
    }
    else{
      return false;
    }
  } 
}
