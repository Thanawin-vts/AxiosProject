import { Component } from '@angular/core';
import { DateFormatterService } from 'date-formatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SelfProject';
  format: string = ''
  date = new Date(Date.now())
  constructor(dateFormatterService: DateFormatterService) {
    // dateFormatterService.test()
  }
}
