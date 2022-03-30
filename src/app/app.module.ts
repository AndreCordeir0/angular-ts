import { JogadoresService } from './service/jogadores.service';
import { SegundoService } from './segundo/segundo.service';
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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { CarrosComponent } from './carros/carros.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    JogadoresComponent,
    CarrosComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    SegundoModule,
    TabMenuModule,
    HttpClientModule,
    GMapModule,
    DockModule,
    RouterModule
    
  ],
  providers: [JogadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
