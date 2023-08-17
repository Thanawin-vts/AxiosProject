import { Component } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SelfProject';
  
  constructor(myLibService: MyLibService) {
    myLibService.tomato()
  }
}
