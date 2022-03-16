import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {
  
  constructor(public servicio:ApisService) { }
  
  ngOnInit(): void {
    if(!this.servicio.inicial){
      this.servicio.nave("https://swapi.dev/api/starships/12");
    }
    
  }


}
