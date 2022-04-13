import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JogadoresService } from './../service/jogadores.service';
import { Jogador } from './../objetos/Jogador';
import { EventEmitter, Injectable } from '@angular/core';
import { usuarioLogin } from './usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private usuarioAutenticado: boolean = false;
  mosrtrarMenuEmitter = new EventEmitter<boolean>();



  constructor(private router :Router,private jogServ:JogadoresService) { }




  // login(jogador: Jogador) {
  //   this.jogServ.login(jogador).subscribe(
  //     (response: Jogador) => {
  //       console.log("Deu certo: ");
  //       console.log(response);

  //       if (response) {

  //         this.usuarioAutenticado = true;
  //         this.mosrtrarMenuEmitter.emit(true);
  //         console.log(this.mosrtrarMenuEmitter);

  //         this.router.navigate(['']);

  //       } else {
  //         this.usuarioAutenticado = false;
  //         this.mosrtrarMenuEmitter.emit(false);
  //       }
  //     },
  //     (error: any) => {
  //       console.error("Login ou Senha incorreta(s)!");
  //     });
  // }

  // usuarioEstaAutenticado() {
  //   return this.usuarioAutenticado;
  // }








}
