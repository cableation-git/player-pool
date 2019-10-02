import { Component, OnInit } from '@angular/core';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

//this one wraps up all the player components

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {
  selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.playerSelected
    .subscribe(
      (player: Player) => {
        this.selectedPlayer = player;
      }
    );
  }

}
