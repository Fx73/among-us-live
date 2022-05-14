import { Observable, Subject } from 'rxjs';

import { AppComponent } from '../app.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  codeLobbyResult$: Subject<string> = new Subject<string>();
  playerListResult$: Subject<Array<string>> = new Subject<Array<string>>();


  constructor() {
    AppComponent.ws.onmessage = (event) => {
      this.receiveData(JSON.parse(event.data));
    };

  }


  /**
   * Envoi l'info de création du lobby
   *
   * @returns {Observable<string>}
   */
  createLobby() {
    AppComponent.ws.send(JSON.stringify({
      type: 'createLobby',
    }));
  }

  /**
   * Envoi la demande de join du lobby
   *
   * @param {string} gameCode Code du lobby
   * @returns {Observable<<Array<{ name: string }>>}
   */
  joinLobby(gameCode: string) {
    AppComponent.ws.send(JSON.stringify({
      type: 'joinLobby',
      lobbyID: gameCode,
    }));
  }

  /**
   * Envoi l'info de départ du lobby
   *
   */
  sendLeave() {
    AppComponent.ws.send(JSON.stringify({
      type: 'leaveLobby',
    }));
  }

  /**
   * Envoi le nom du joueur
   *
   * @param {string} name Nom du joueur
   */
  sendName(name: string) {
    AppComponent.ws.send(JSON.stringify({
      type: 'changeName',
      playerName: name,
    }));
  }

  /**
   * Kick un joueur
   *
   * @param {string} name Nom du joueur
   */
  kickPlayer(name: string) {
    AppComponent.ws.send(JSON.stringify({
      type: 'kickPlayer',
      playerName: name,
    }));
  }


  /**
   * Envoi le signal de début de partie
   *
   */
  startGame() {
    AppComponent.ws.send(JSON.stringify({
      type: 'launchGame',
      numberOfImpostors: 0,
    }));
  }



  /**
   * Reception des données du serveur et attribution au bon observable
   *
   * @param data
   */
  receiveData(data: any) {
    console.log(data);
    if (data.type === 'lobbyCreated') {
      this.codeLobbyResult$.next(data.lobbyID);
    } else if (data.type === 'lobbyDestroyed') {
      // TODO
    } else if (data.type === 'playerLeft') {
      this.playerListResult$.next(data.players);
    } else if (data.type === 'playerJoined') {
      this.playerListResult$.next(data.players);
    } else if (data.type === 'lobbyJoinSuccess') {
      this.playerListResult$.next(data.players);
    } else if (data.type === 'nonExistingLobby') {
      //TODO
    } else if (data.type === 'changeName') {
      this.playerListResult$.next(data.players);
    } else {
      this.receveidDataError(data);
    }
  }

  receveidDataError(data: any) {
    console.log(data);
  }
}
