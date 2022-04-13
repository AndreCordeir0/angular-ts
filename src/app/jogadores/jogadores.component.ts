import { Jogador } from './../objetos/Jogador';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JogadoresService } from '../service/jogadores.service';
@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {


jogadores :Array<Jogador>=[]




constructor( private jogadoresService:JogadoresService) {

}

  ngOnInit(): void {
  this.listarJogadores()
  }
listarJogadores(){
  this.jogadoresService.listarJogadores().subscribe(jogadores =>{
    setTimeout(() => {
      this.jogadores=jogadores;


    }, 400);
  });
}
}
