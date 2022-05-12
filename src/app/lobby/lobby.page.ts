/* eslint-disable curly */

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { config } from 'src/config';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  gameCode: string;

  playerList: Array<{ name: string; ready: boolean }>;
  equipmentList: Array<{ name: string; ready: boolean }>;

  private admin: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.gameCode = this.activatedRoute.snapshot.paramMap.get('gameCode');
    if (this.gameCode == null) {
      this.admin = true;
      this.gameCode = this.makeid();
    }
    this.fakeInit();
  }


  copyCodeToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.gameCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  kickPlayer(playerName: string) {
    if (!this.admin)
      return;
    this.playerList = this.playerList.filter(player => player.name !== playerName);
  }

  kickEquipment(playerName: string) {
    if (!this.admin)
      return;
    this.equipmentList = this.equipmentList.filter(player => player.name !== playerName);
  }

  fakeInit() {
    this.playerList = [{ name: 'player1', ready: true }, { name: 'player2', ready: false }];
    this.equipmentList = [{ name: 'equipement1', ready: false }, { name: 'equipement2', ready: true }];

  }


  isAdmin(): boolean {
    return this.admin;
  }

  makeid(): string {
    length = config.gameCodeLength;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
