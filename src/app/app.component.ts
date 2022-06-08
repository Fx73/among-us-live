import { Component } from '@angular/core';
import { Player } from './shared/player';
import { stringEN } from 'src/strings';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  static ws: WebSocket;

  constructor() {
    AppComponent.ws = new WebSocket('ws://localhost:8080');
  }


}
