import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players/players.component';
import { ClubsComponent } from './clubs/clubs.component';
import { PlayerStartComponent } from './players/player-start/player-start.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component:  PlayersComponent, children: [
    { path: '', component: PlayerStartComponent },
    { path: 'new', component: PlayerEditComponent },
    { path: ':id', component: PlayerDetailComponent },   
    { path: ':id/edit', component: PlayerEditComponent }
  ] },
  { path: 'clubs', component:  ClubsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}