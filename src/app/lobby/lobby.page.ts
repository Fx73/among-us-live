import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PlayerColor } from '../shared/player-colors';
import { Router } from '@angular/router';
import { config } from 'src/config';

/* eslint-disable curly */

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  gameCode: string;
  name: string;
  color: string;
  isNameLocked = false;

  colors: Array<string>;

  playerList: Array<{ name: string }>;

  private admin: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.gameCode = this.activatedRoute.snapshot.paramMap.get('gameCode');
    if (this.gameCode == null) {
      this.admin = true;
      this.gameCode = this.makeid();
    }
    this.colors = Object.keys(PlayerColor).map(s => s.toLowerCase());
    this.fakeInit();
  }

  isAdmin(): boolean {
    return this.admin;
  }

  copyCodeToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.gameCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  validName() {
    this.isNameLocked = !this.isNameLocked;
  }

  kickPlayer(playerName: string) {
    if (!this.admin) return;
    this.playerList = this.playerList.filter(
      (player) => player.name !== playerName
    );
  }


  launchGame() {
    this.router.navigateByUrl('/Game/' + this.gameCode);
  }


  makeid(): string {
    length = config.gameCodeLength;
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  fakeInit() {
    this.playerList = [
      { name: 'player1', },
      { name: 'player2', },
    ];
  }

}
