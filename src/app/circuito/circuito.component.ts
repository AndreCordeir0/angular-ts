import { Circuito } from './../objetos/Circuito';
import { CircuitoService } from './service/circuito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.component.html',
  styleUrls: ['./circuito.component.css']
})
export class CircuitoComponent implements OnInit {

  constructor(private circuitoServ:CircuitoService) { }

circuito:Array<Circuito>=[]

  ngOnInit(): void {
    this.listarCircuito();
  }

  listarCircuito(){
    this.circuitoServ.listarCircuito().subscribe(circuito =>{
      setTimeout(() => {
        this.circuito=circuito;
  
       
      }, 400);
    });
  }

}
