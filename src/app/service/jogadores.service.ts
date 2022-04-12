import { Router } from '@angular/router';
import { usuarioLogin } from './../login/usuarioLogin';
import { environment } from './../../environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Jogador } from '../objetos/Jogador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogadoresService {

  private readonly API =`${environment.API}jogador`
  private readonly APICAR =`${environment.API}carro`
  mostrarMenuEmitter = new EventEmitter<boolean>();
  private usuarioAutenticado:boolean = false
  nome:any;

  constructor(private route:Router,private $http:HttpClient) { }




listarJogadores(){
  return this.$http.get<Jogador[]>(`${this.API}/todos`)
}

listarCarros(){
  return this.$http.get<Jogador[]>(`${this.APICAR}/todos`)

}

alterarCarro(jogador:Jogador){
return this.$http.put(`$(this.API)`,jogador)
}

listarJogadorId(id:any):Observable<Jogador>{
return this.$http.get<Jogador>(`$(this.API)/${id}`)
}


login(usuarioLogin:usuarioLogin):Observable<Jogador>{
  this.mostrarMenuEmitter.emit(false)
  this.usuarioAutenticado = false;
  return this.$http.post<Jogador>(`${this.API}/login`,usuarioLogin)


}


usuarioEstaAutenticado(){
  if(this.usuarioAutenticado){

    return this.mostrarMenuEmitter.emit(true);
     ;
  }
  return this.route.navigate(['login'])
}

recebe(usuarioLogin:usuarioLogin){
var nome = usuarioLogin;
return console.log(nome);


}

pegaLogin(usuarioLogin:usuarioLogin){
  return this.recebe(usuarioLogin);
}
}
