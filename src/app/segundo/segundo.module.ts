
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {ColorPickerModule} from 'primeng/colorpicker';
import {PasswordModule} from 'primeng/password';
import {AccordionModule} from 'primeng/accordion'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SegundoComponent } from './segundo.component';

@NgModule({
  declarations: [
    SegundoComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    PasswordModule,
    ColorPickerModule
  ],
  exports:[
    SegundoComponent  
  ]
})
export class SegundoModule { }
