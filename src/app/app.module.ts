import { MensagensModule } from './mensagens/mensagens/mensagens.module';
import { Guards } from './guards/guards';
import { CircuitoService } from './circuito/service/circuito.service';
import { AuthService } from './login/auth.service';
import { CarrosService } from './carros/service/carros.service';
import { JogadoresService } from './service/jogadores.service';
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
import {DynamicDialogModule} from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { CarrosComponent } from './carros/carros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { CircuitoComponent } from './circuito/circuito.component';
import { SafeHtmlPipeComponent } from './safe-html-pipe/safe-html-pipe.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    JogadoresComponent,
    CarrosComponent,
    HomeComponent,
    LoginComponent,
    CircuitoComponent,
    SafeHtmlPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    FormsModule,
    MessagesModule,
    AvatarGroupModule,
    MessageModule,
    DynamicDialogModule,
    SkeletonModule,
    MensagensModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    HttpClientModule,
    GMapModule,
    DockModule,
    RouterModule

  ],
  providers: [JogadoresService,CarrosService,AuthService,Guards,CircuitoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
