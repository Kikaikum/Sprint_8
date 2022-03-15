import { Component } from '@angular/core';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public login:LoginService){}
  title = 'Sprint_8';
  loged=false
  ngOnInit(): void {
    this.loged=this.login.isLogin();
    this.login.loginStatus$.subscribe((logged:boolean)=>{
      this.loged=logged;
    })
  }
}
