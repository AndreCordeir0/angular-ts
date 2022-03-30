import { HomeComponent } from './home/home.component';
import { CarrosComponent } from './carros/carros.component';
import { JogadoresComponent } from './jogadores/jogadores.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'jogadores',component:JogadoresComponent},
  {path:'carros',component:CarrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
