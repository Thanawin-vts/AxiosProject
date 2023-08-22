import { Component } from '@angular/core';
import { WnmoduleService } from 'Wnmodule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SelfProject';
  constructor(wnService: WnmoduleService) {
    wnService.logTest()
  }
}
