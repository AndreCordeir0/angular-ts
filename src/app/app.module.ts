import { CarrosService } from './carros/service/carros.service';
import { JogadoresService } from './service/jogadores.service';
import { SegundoModule } from './segundo/segundo.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TabMenuModule} from 'primeng/tabmenu';
import {GMapModule} from 'primeng/gmap';
import {DockModule} from 'primeng/dock';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SkeletonModule} from 'primeng/skeleton';
import {ButtonModule} from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { CarrosComponent } from './carros/carros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    JogadoresComponent,
    CarrosComponent,
    HomeComponent,
    LoginComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SkeletonModule,
    TableModule,
    SegundoModule,
    ButtonModule,
    TabMenuModule,
    HttpClientModule,
    GMapModule,
    DockModule,
    RouterModule
    
  ],
  providers: [JogadoresService,CarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
