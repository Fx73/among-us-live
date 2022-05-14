import { Component } from '@angular/core';
import { stringEN } from 'src/strings';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  static inGame = false;
  static ws: WebSocket;


  // Strings
  menuTitle = stringEN['menu.title'];

  // Menu
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];


  constructor() {
    AppComponent.ws = new WebSocket('ws://localhost:8080');
  }

  getUser(): string {
    return 'User';
  }

  isInGame(): boolean {
    return AppComponent.inGame;
  }
}
