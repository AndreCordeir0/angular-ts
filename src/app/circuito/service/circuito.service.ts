import { Circuito } from './../../objetos/Circuito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CircuitoService {

  private readonly API =`${environment.API}circuito`


  constructor( private $http:HttpClient) { }

  listarCircuito(){
    return this.$http.get<Circuito[]>(`${this.API}/todos`)
  }

listarCircuitoPorId(id :any){
  return this.$http.get<Circuito>(`${this.API}/${id}`)
}

}
