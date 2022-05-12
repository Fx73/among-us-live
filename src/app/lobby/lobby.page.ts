import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
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
  ready = false;

  playerList: Array<{ name: string; ready: boolean }>;
  equipmentList: Array<{ name: string; ready: boolean }>;

  private admin: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.gameCode = this.activatedRoute.snapshot.paramMap.get('gameCode');
    if (this.gameCode == null) {
      this.admin = true;
      this.gameCode = this.makeid();
    }
    this.fakeInit();
  }

  isAdmin(): boolean {
    return this.admin;
  }

  isEveryoneReady(): boolean {
    return (
      this.playerList.every((player) => player.ready) &&
      this.equipmentList.every((player) => player.ready)
    );
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
    if (!this.admin) return;
    this.playerList = this.playerList.filter(
      (player) => player.name !== playerName
    );
  }

  kickEquipment(playerName: string) {
    if (!this.admin) return;
    this.equipmentList = this.equipmentList.filter(
      (player) => player.name !== playerName
    );
  }

  fakeInit() {
    this.playerList = [
      { name: 'player1', ready: true },
      { name: 'player2', ready: false },
    ];
    this.equipmentList = [
      { name: 'equipement1', ready: false },
      { name: 'equipement2', ready: true },
    ];
  }

  launchGame() {
    this.router.navigateByUrl('/Game/' + this.gameCode);
  }

  getReady() {
    this.ready = !this.ready;
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
}
