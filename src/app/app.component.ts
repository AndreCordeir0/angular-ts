import { JogadoresService } from './service/jogadores.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';




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

constructor(private loginServ:JogadoresService ,private route:Router) {

}
mostrarMenu :boolean = false;
ngOnInit(){
  this.items = [
    {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:['/home']},
    {label: 'Jogadores', icon: 'pi pi-fw pi-user',routerLink:['/jogadores']},
    {label: 'Carros', icon: 'pi pi-fw pi-car',routerLink:['/carros']},
    {label: 'Corrida', icon: 'pi pi-fw pi-flag',routerLink:['/corrida']}
];
this.loginServ.mostrarMenuEmitter.subscribe(
  menu => this.mostrarMenu= menu
);

this.loginServ.usuarioEstaAutenticado()
}

}
