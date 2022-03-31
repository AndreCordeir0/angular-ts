import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Jogador } from '../objetos/Jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadoresService {

  private readonly API =`${environment.API}jogador`
  private readonly APICAR =`${environment.API}carro`

  constructor(private $http:HttpClient) { }


listarJogadores(){
  return this.$http.get<Jogador[]>(`${this.API}/todos`)
}

listarCarros(){
  return this.$http.get<Jogador[]>(`${this.APICAR}/todos`)

}

alterarCarro(jogador:Jogador){
return this.$http.put(`$(this.API)`,jogador)
}


}
