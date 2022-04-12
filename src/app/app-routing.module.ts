import { CircuitoComponent } from './circuito/circuito.component';
import { Guards } from './guards/guards';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarrosComponent } from './carros/carros.component';
import { JogadoresComponent } from './jogadores/jogadores.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'home',component:HomeComponent},
  {path:'jogadores',component:JogadoresComponent},
  {path:'carros',component:CarrosComponent},
  {path: 'home', component: HomeComponent, canActivate: [Guards]},
  {path:'login',component:LoginComponent},
  {path:'corrida',component:CircuitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
