import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { SegundoService } from './segundo/segundo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public date13!: Date;
  title = 'angular-ts';
  nomeCursos:string[];
  items!: MenuItem[];

letola = 10;
constructor(private auth:AuthService,private segundoService:SegundoService,private route:Router) {
 
  this.nomeCursos=this.segundoService.getCursos();
}

mostrarMenu :boolean = false;
ngOnInit(){
  this.items = [
    {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:['/home']},
    {label: 'Jogadores', icon: 'pi pi-fw pi-align-center',routerLink:['/jogadores']},
    {label: 'Carros', icon: 'pi pi-fw pi-car',routerLink:['/carros']}
];
this.mostrarMenu =true;
}

}
