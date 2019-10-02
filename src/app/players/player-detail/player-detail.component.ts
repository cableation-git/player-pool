import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
   player: Player;
   id: number;

  constructor( private playerService: PlayerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.player = this.playerService.getPlayer(this.id);
      }
    )
  }

  onAddClubToPlayerClub() {
    this.playerService.addClubToPlayerClubs(this.player.clubs);
  }

  onEditPlayer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id,'edit], {relativeTo: this.route});
  }

}
