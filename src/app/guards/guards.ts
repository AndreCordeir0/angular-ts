import { JogadoresService } from './../service/jogadores.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Guards implements CanActivate {

  constructor(private jogServ: JogadoresService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
   if (this.jogServ.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

}
