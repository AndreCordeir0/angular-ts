import { AfterViewInit,Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  options: any;
  overlays!: any[];
  dockItems!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.dockItems = [
      {
          label: 'Finder',
          icon: "pi pi-fw pi-car"
      },
      {
          label: 'App Store',
          icon: "assets/showcase/images/dock/appstore.svg"
      },
      {
          label: 'Photos',
          icon: "assets/showcase/images/dock/photos.svg"
      },
      {
          label: 'Trash',
          icon: "assets/showcase/images/dock/trash.png"
      }
  ];

}
  
 
}
