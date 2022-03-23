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
  load=false;
  inicial=false;
  finish=false;
  


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
        this.load=true;
        if(!this.limite){
          this.limite=30;
        }
    });
  }

  getNaves(){
    if (!this.finish){
      this.load=false;
    this.masNaves=false;
    this.http.get(this.API_URL+this.pagina).subscribe((data: naus) => {   
        this.naves=this.naves.concat(data.results);
        console.log(data.count);
        this.pagina+=1;
        console.log(this.naves);
        this.load=true;
        if(this.naves.length<31){
          this.masNaves=true;
        }
        else{
          this.masNaves=false;
          this.finish=true;
        }
      });
    }
    
  }
  nave(url: any){
    this.inicial=true;    
    this.router.navigate(['nave']) 
    this.load=false;
      
    this.http.get(url).subscribe((data:nave)=>{
      this.infoNave=data;      
      let id=this.infoNave.url.replace("https://swapi.dev/api/starships/","");
      this.id=id.replace("/","");      
      this.load=true;
      
      
    })
  } 
  entrar(){    
    this.router.navigate(['starships'])   
  } 
  
}
