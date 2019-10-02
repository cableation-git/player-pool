import { EventEmitter, Injectable } from '@angular/core';

import { Player } from './player.model';
import { Club } from '../clubs/club.model';
import { ClubService } from '../clubs/club.service';

@Injectable()
export class PlayerService {
  playerSelected = new EventEmitter<Player>();

  private players: Player[] = [
    new Player(
      'Bob', 
      'Smith', 
      '1936-02-02', 
      70, 
      150, 
      'Lakewood', 
      'CA', 
      'us',
      'http://www.empireofsoccer.com/wp-content/uploads/2014/06/Clint-Dempsey-USMNT.jpg',
      [
        new Club(
          'Arsenal',
          'EPL',
          1897,
          'https://www.arsenal.com/sites/default/files/styles/mobile_16x9/public/images/arsenal_crest.jpg?itok=6FqNkIv-',
          'Premiere',
          'London',
          'UK')
      ]
      ),
    new Player(
      'Billy', 
      'Jones', 
      '1939-01-02', 
      70, 
      150, 
      'Ternbury', 
      'CO', 
      'us',
      'https://cdn.vox-cdn.com/thumbor/dy430hRE-67MFbrgE_Gh6cE2vqw=/0x0:2029x2962/1200x800/filters:focal(896x623:1220x947)/cdn.vox-cdn.com/uploads/chorus_image/image/61716121/usa_today_10990034.0.jpg',
      [
        new Club(
          'Chelsea',
          'EPL',
          1897,
          'https://www.arsenal.com/sites/default/files/styles/mobile_16x9/public/images/arsenal_crest.jpg?itok=6FqNkIv-',
          'Premiere',
          'London',
          'UK')
      ]
      )
    ];  
    
    constructor(private clubService: ClubService) {}
    
    getPlayers() {
        return this.players.slice();
    }
    getPlayer(index: number) {
      return this.players[index];
    }

    addClubToPlayerClubs(clubs: Club[]) {
      this.clubService.addClubs(clubs);
    }

}