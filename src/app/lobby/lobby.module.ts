import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameSettingsComponent } from '../game-settings/game-settings.component';
import { IonicModule } from '@ionic/angular';
import { LobbyPage } from './lobby.page';
import { LobbyPageRoutingModule } from './lobby-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LobbyPageRoutingModule

  ],
  declarations: [LobbyPage, GameSettingsComponent]
})
export class LobbyPageModule { }
