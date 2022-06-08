import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Player } from 'src/app/shared/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  gameCode: string;
  isInpostor: boolean;
  // Menu
  public appPages = [
    { title: 'Task List', action: 'tasklist', icon: 'menu', active: () => true },
    { title: 'Map', action: 'map', icon: 'map', active: () => true },
    { title: 'Scan Task', action: 'taskscan', icon: 'hammer', active: () => true },
    { title: 'Report', action: 'report', icon: 'megaphone', active: () => true },
    { title: 'Kill', action: 'kill', icon: 'fitness', active: () => this.isInpostor },
    { title: 'Sabotage', action: 'sabotage', icon: 'flash', active: () => this.isInpostor },
    { title: 'Settings', action: 'settings', icon: 'settings', active: () => false },
  ];
  public actionMenu: string;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.gameCode = this.activatedRoute.snapshot.paramMap.get('gameCode');
  }

  onActionOnMenu(action: string) {
    this.actionMenu = action;
  }

  getUserName(): string {
    return Player.pname;
  }
}
