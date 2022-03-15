import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(public servicio:ApisService){}
  
  ngOnInit(): void {    
  }   
  
      
    


}
