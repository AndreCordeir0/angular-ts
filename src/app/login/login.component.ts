import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { JogadoresService } from './../service/jogadores.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from './auth.service';
import { usuarioLogin } from './usuarioLogin';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: usuarioLogin = new usuarioLogin()
  @Output() nick = new EventEmitter<string>();
  msgs1: Message[];


  constructor(private appComponent:AppComponent,private router:Router, private authService:AuthService, private jogServ :JogadoresService ) { }

  ngOnInit(): void {

  }
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  login = () => {
    this.jogServ.login(this.usuarioLogin).subscribe(succes =>{
      console.log("autenticado");
      this.jogServ.mostrarMenuEmitter.emit(true)
      this.usuarioAutenticado = true;
      this.router.navigate(['home'])

    },error=>{

      this.jogServ.mostrarMenuEmitter.emit(false)

      this.msgs1 = [
        {severity:'error', summary:'Error', detail:'Login ou Senha incorreto'},

     ];
      this.usuarioAutenticado = false;
      this.jogServ.usuarioEstaAutenticado();
    });

  }

  recebe(n:any){
  console.log(n);
  this.nick.emit(n);
  return this.appComponent.nicks(n);

  }

}
