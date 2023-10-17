import { Component } from '@angular/core';
import { Test1Service } from 'wn-test-lib/dist/test1'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SelfProject';
  format: string = ''
  date = new Date(Date.now())
  constructor(private sv: Test1Service) {
    sv.test()
  }
}
