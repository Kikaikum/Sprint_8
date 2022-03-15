import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './lista/lista.component';
import { NaveComponent } from './nave/nave.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoggedGuard } from './guards/logged.guard';


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'starships',component:ListaComponent,
  canActivate: [AuthGuardGuard]},
  {path:'nave',component:NaveComponent,
  canActivate: [AuthGuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    NaveComponent,
    
    MenuComponent,
         LoginComponent,
         RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
