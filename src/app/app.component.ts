import { Component } from '@angular/core';
import { GameViews } from './shared/game-views';
import { Player } from './shared/player';
import { stringEN } from 'src/strings';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  static ws: WebSocket;

  // Menu
  public appPages = [
    { title: 'Task List', action: GameViews.tasklist, icon: 'clipboard', active: () => true },
    { title: 'Map', action: GameViews.taskmap, icon: 'map', active: () => true },
    { title: 'Scan Task', action: GameViews.taskscan, icon: 'hammer', active: () => true },
    { title: 'Report', action: GameViews.report, icon: 'megaphone', active: () => true },
    { title: 'Settings', action: GameViews.settings, icon: 'settings', active: () => false },
  ];

  constructor() {
    AppComponent.ws = new WebSocket('ws://localhost:8080');
  }

  onActionOnMenu() {
    console.log('POUUTT');
  }
}
