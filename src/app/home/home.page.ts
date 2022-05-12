import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { config } from 'src/config';
import { stringEN } from 'src/strings';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



  // Strings
  stringJoin = stringEN['home.join'];
  stringCreate = stringEN['home.create'];
  stringJoinGame = stringEN['home.joinGame'];
  stringCreateGame = stringEN['home.createGame'];
  stringEnterCode = stringEN['home.enterCode'];

  gameCode: string;


  constructor(private router: Router) { }

  ngOnInit() {
    AppComponent.inGame = false;
  }



  refreshCode(event: any) {
    this.gameCode = event.target.value;
  }

  joinGame() {
    this.router.navigateByUrl('/Lobby/' + this.gameCode);

  }


  createGame() {
    this.router.navigateByUrl('/Lobby');
  }




}

