import { Component, OnInit } from '@angular/core';
import { Player } from  '../player.model';
import { PlayerService } from '../player.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService,
             private router: Router,
             private route: ActivatedRoute) 
    { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  onNewPlayer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

 
}
