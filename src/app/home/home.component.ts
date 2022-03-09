import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { naus } from "../interfaces/interface"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  naves:any;
  API_URL:string="https://swapi.dev/api/starships/";  
  kike=false;
  pagina=2;
  ngOnInit(): void {    
    this.getNaves()
  }

  

  getNaves(){
    const observable = new Observable(subs => {
      subs.next('hola');

      subs.next(this.http.get('https://swapi.dev/api/starships/?page=1').subscribe((data: naus) => {        
        this.naves=data.results;
      }));

      setInterval(() =>{
        if (this.kike){
          this.kike=false;
          console.log('dado');
          subs.next(this.http.get('https://swapi.dev/api/starships/?page='+this.pagina).subscribe((data: naus) => {        
          console.log(data)          
          this.pagina+=1          
          this.naves=this.naves.concat(data.results);
          console.log(this.naves);          
        }));
        }
      },1000)
      
      
      subs.complete();
    });
    observable.subscribe(
      value => console.log('calla ',value),
      error => console.log('error ', error),
      () => console.log('se acabo')
    )
  }

  test(){
    if(this.naves.lenght<36)     
      this.kike=true;    
  }


}
