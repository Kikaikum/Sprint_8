import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './lista/lista.component';
import { NaveComponent } from './nave/nave.component';
import { NavesComponent } from './naves/naves.component';



const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'starships',component:NavesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    NaveComponent,
    NavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
