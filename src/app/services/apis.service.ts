import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { naus } from "../interfaces/interface"



@Injectable({
  providedIn: 'root'
})


export class ApisService {
  
  API_URL:string="https://swapi.dev/api/starships/";
  constructor(private http: HttpClient) { }
  
  getNaves(){
    const observable = new Observable(subs => {
      subs.next('hola');
      subs.next('adiso');
      subs.complete();
    });
    observable.subscribe(
      value => console.log('calla ',value),
      error => console.log('error ', error),
      () => console.log('se acabo')
    )
  }
 
}
