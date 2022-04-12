import { Component,Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipeComponent implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
 

}
