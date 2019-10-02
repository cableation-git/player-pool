import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { HeaderComponent } from './header/header/header.component';
import { PlayersComponent } from './players/players/players.component';
import { PlayerItemComponent } from './players/player-list/player-item/player-item.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubEditComponent } from './clubs/club-edit/club-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ClubService } from './clubs/club.service';
import { AppRoutingModule } from './app-routing.module';
import { PlayerStartComponent } from './players/player-start/player-start.component';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,    
    PlayerDetailComponent,
    PlayerListComponent,
    HeaderComponent,
    PlayerItemComponent,
    ClubsComponent,
    ClubEditComponent,
    DropdownDirective,
    PlayerStartComponent,
    PlayerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
