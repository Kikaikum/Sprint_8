import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { naus } from "../interfaces/interface"
import { nave } from "../interfaces/naveInterface"


@Injectable({
  providedIn: 'root'
})


export class ApisService {

  naves:any;   
  masNaves=false;
  pagina=1;
  lista=true;
  limite:number | undefined;
  API_URL:string="https://swapi.dev/api/starships/?page=";
  url='t';
  id=0;
  infoNave:any;
  


  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  start(){
    this.http.get(this.API_URL+this.pagina).subscribe((data: naus) => {        
        this.naves=data.results;
        this.pagina+=1;
        this.limite=data.count
        this.masNaves=true;
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
  nave(url: any){    
    this.router.navigate(['nave'])   
    this.http.get(url).subscribe((data:nave)=>{
      this.infoNave=data;      
      let id=this.infoNave.url.replace("https://swapi.dev/api/starships/","");
      this.id=id.replace("/","");
      
      
    })
  } 
  entrar(){    
    this.router.navigate(['starships'])   
  } 
  
}
