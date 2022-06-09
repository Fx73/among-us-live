import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GameViews } from '../shared/game-views';
import { Player } from 'src/app/shared/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly GameViews = GameViews;

  gameCode: string;
  isInpostor: boolean;
  gameView: GameViews;

  // Menu
  public appPages = [
    { title: 'Task List', action: GameViews.tasklist, icon: 'clipboard', active: () => true },
    { title: 'Map', action: GameViews.taskmap, icon: 'map', active: () => true },
    { title: 'Scan Task', action: GameViews.taskscan, icon: 'hammer', active: () => true },
    { title: 'Report', action: GameViews.report, icon: 'megaphone', active: () => true },
    { title: 'Kill', action: GameViews.kill, icon: 'fitness', active: () => this.isInpostor },
    { title: 'Sabotage', action: GameViews.sabotage, icon: 'flash', active: () => this.isInpostor },
    { title: 'Settings', action: GameViews.settings, icon: 'settings', active: () => false },
  ];


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.gameCode = this.activatedRoute.snapshot.paramMap.get('gameCode');
  }

  onActionOnMenu(action: GameViews) {
    console.log('POUUTT');
    this.gameView = action;
  }

  getUserName(): string {
    return Player.pname;
  }
}


