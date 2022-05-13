import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  codeLobbyResult$: Observable<string> = new Observable<string>();
  playerListResult$: Observable<Array<{ name: string }>> = new Observable<Array<{ name: string }>>();


  constructor() { }


  /**
   * Envoi l'info de création du lobby
   *
   * @returns {Observable<string>}
   */
  createLobby() {

  }

  /**
   * Envoi la demande de join du lobby
   *
   * @param {string} gameCode Code du lobby
   * @returns {Observable<<Array<{ name: string }>>}
   */
  joinLobby(gameCode: string) {

  }

  /**
   * Envoi l'info de départ du lobby
   *
   */
  sendLeave() {

  }

  /**
   * Envoi le nom du joueur
   *
   * @param {string} name Nom du joueur
   */
  sendName(name: string) {

  }

  /**
   * Envoi le signal de début de partie
   *
   */
  startGame() {

  }



}
