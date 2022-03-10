import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public servicio:ApisService) { }  
  
  ngOnInit(): void {    
    this.servicio.start();    
  }  

  

}
