import { JogadoresService } from './../service/jogadores.service';
import { Component, OnInit } from '@angular/core';
import { Jogador } from '../objetos/Jogador';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
  
  carros :Array<Jogador>=[]
  carro:Jogador = new Jogador()


  constructor(private jogadoresService:JogadoresService) { }

  ngOnInit(): void {
    this.listarCarros()
  }

  listarCarros(){
    this.jogadoresService.listarCarros().subscribe(carros =>{
      setTimeout(() => {
        this.carros=carros;
  
       
      }, 400);
    });
  }
  alterar = () => {
    this.jogadoresService.alterarCarro(this.carro).subscribe(sucess =>{
      console.log('deu certo');
      
    })
  
}
}