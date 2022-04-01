import { JogadoresService } from './../service/jogadores.service';
import { Component, OnInit } from '@angular/core';
import { Jogador } from '../objetos/Jogador';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
  
  carros :Array<Jogador>=[]
  carro:Jogador = new Jogador()
  mostrar:Boolean =false;
  carroSelecionado: any;

  toggle(carroClickado : any){
  this.mostrar =!this.mostrar;
  this.carroSelecionado = carroClickado;
  console.log('teste')

}


  constructor(private jogadoresService:JogadoresService) { }

  ngOnInit(): void {
    this.listarCarros()
  }

  listarCarros(){
    this.jogadoresService.listarCarros().subscribe(carros =>{
      setTimeout(() => {
        this.carros=carros;
        console.log('teste2')

       
      }, 400);
    });
  }
  alterar = () => {
    this.jogadoresService.alterarCarro(this.carro).subscribe(sucess =>{
      console.log('deu certo');
      console.log('teste3')

    })
  
}
}