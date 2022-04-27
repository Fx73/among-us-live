import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameSettingsComponent } from './../game-settings/game-settings.component';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, GameSettingsComponent]
})
export class HomePageModule { }
