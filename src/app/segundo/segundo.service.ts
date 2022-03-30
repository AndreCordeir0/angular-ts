import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SegundoService {

  constructor() { }


  getCursos(){
    return ['Java','Ruby','Angular','JavaScript']
  }
}
