import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registro = new FormGroup({
    user:new FormControl('',[Validators.required, Validators.minLength(2)]),
    password:new FormControl('',[Validators.required, Validators.minLength(2)])
  })
  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }
  
  
  
}
