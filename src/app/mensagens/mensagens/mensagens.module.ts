import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensComponent } from './mensagens.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    MessageModule
  ],
  exports:[MensagensComponent],
})
export class MensagensModule { }
