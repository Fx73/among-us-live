import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'Game/:gameCode',
    loadChildren: () => import('./game/game.module').then(m => m.GamePageModule)
  },
  {
    path: 'Lobby/:gameCode',
    loadChildren: () => import('./lobby/lobby.module').then(m => m.LobbyPageModule)
  },
  {
    path: 'LobbyAdmin/:gameCode',
    loadChildren: () => import('./lobby-admin/lobby-admin.module').then(m => m.LobbyAdminPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
