import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registro = new FormGroup({
    user:new FormControl('',[Validators.required, Validators.minLength(2)]),
    password:new FormControl('',[Validators.required, Validators.minLength(2)])
  })
  constructor(public login:LoginService) { }
  
  ngOnInit(): void {
  }

}
