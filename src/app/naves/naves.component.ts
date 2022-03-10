import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  constructor(public servicio:ApisService) { }
  
  ngOnInit(): void {
  }

}
