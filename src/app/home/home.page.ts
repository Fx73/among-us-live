import { Component, OnInit } from '@angular/core';

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
  }



  refreshCode(event: any) {
    this.gameCode = event.target.value;
  }

  joinGame() {
    this.router.navigateByUrl('/Game/' + this.gameCode);
  }


  createGame() {
    this.router.navigateByUrl('/Game/' + this.makeid());
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

