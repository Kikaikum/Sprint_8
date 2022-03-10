import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { naus } from "../interfaces/interface"



@Injectable({
  providedIn: 'root'
})


export class ApisService {

  naves:any;   
  masNaves=true;
  pagina=1;
  lista=true;
  limite:number | undefined;
  API_URL:string="https://swapi.dev/api/starships/?page=";
  url='t';
  infoNave:any;


  constructor(private http: HttpClient) { }

  start(){
    this.http.get(this.API_URL+this.pagina).subscribe((data: naus) => {        
        this.naves=data.results;
        this.pagina+=1;
        this.limite=data.count
        if(!this.limite){
          this.limite=30;
        }
    });
  }

  getNaves(){
    this.masNaves=false;
    this.http.get(this.API_URL+this.pagina).subscribe((data: naus) => {   
        this.naves=this.naves.concat(data.results);
        console.log(data.count);
        this.pagina+=1;
        console.log(this.naves);
        if(this.naves.length<31){
          this.masNaves=true;
        }
        else{
          this.masNaves=false;
        }
      });
  }
  hola(url: any){    
    this.lista=false;    
    this.http.get(url).subscribe(data=>{
      this.infoNave=data;
      console.log(data)
    })
  } 

  
}
