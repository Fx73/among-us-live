import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamePage } from './game.page';
import { GamePageRoutingModule } from './game-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskmapComponent } from './taskmap/taskmap.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule
  ],
  declarations: [GamePage, TasklistComponent, TaskmapComponent]
})
export class GamePageModule { }
