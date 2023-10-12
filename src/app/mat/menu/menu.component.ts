import { Component } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  title: string[] = [
    'Insects', 'Molluscs', 'Crustaceans', 
  ];

}
