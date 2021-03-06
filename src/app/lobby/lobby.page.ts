import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player, PlayerColor } from 'src/app/shared/player';

import { ActivatedRoute } from '@angular/router';
import { LobbyService } from 'src/app/services/lobby.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

/* eslint-disable curly */

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit, OnDestroy {
  colors = Object.keys(PlayerColor).map(s => s.toLowerCase());
  subscriptions: Subscription = new Subscription();
  playerList: Array<string>;

  gameCode: string;
  name: string = Player.pname;
  color: string = Player.color;
  isNameLocked = false;

  private admin: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private lobbyService: LobbyService) { }

  ngOnInit() {
    this.gameCode = this.activatedRoute.snapshot.paramMap.get('gameCode');
    if (this.gameCode == null) {
      this.admin = true;
      this.subscriptions.add(
        this.lobbyService.codeLobbyResult$.subscribe((code) => { this.gameCode = code; })
      );
      this.lobbyService.createLobby();
    } else {
      this.lobbyService.joinLobby(this.gameCode);
    }

    this.subscriptions.add(
      this.lobbyService.playerListResult$.subscribe((list) => { this.playerList = list; })
    );

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.lobbyService.sendLeave();
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
    this.lobbyService.sendName(this.name);
    Player.pname = this.name;
  }

  kickPlayer(playerName: string) {
    this.lobbyService.kickPlayer(playerName);
  }


  launchGame() {
    this.lobbyService.startGame();
    this.router.navigateByUrl('/Game/' + this.gameCode);
  }



}
