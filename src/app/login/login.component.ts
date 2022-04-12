import { Router } from '@angular/router';
import { JogadoresService } from './../service/jogadores.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { usuarioLogin } from './usuarioLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: usuarioLogin = new usuarioLogin()


  constructor(private router:Router, private authService:AuthService, private jogServ :JogadoresService ) { }

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
      console.log("Deu merda!!")
      this.jogServ.mostrarMenuEmitter.emit(false)
      alert("Usuario ou Senha incorreto")
      this.usuarioAutenticado = false;
      this.jogServ.usuarioEstaAutenticado();
    });

  }
  recebe(n:any,l:any){
    console.log(n +", "+ l);

  }
}
