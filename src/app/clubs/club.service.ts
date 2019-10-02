import { Club } from '../clubs/club.model';
import { EventEmitter } from '@angular/core';

export class ClubService {
  clubsChanged = new EventEmitter<Club[]>();
  
  private clubs: Club[] = [
    new Club('Arsenal','EPL',1897,'https://www.arsenal.com/sites/default/files/styles/mobile_16x9/public/images/arsenal_crest.jpg?itok=6FqNkIv-',
    'Premiere','London','UK'),
    new Club('Chelsea','EPL',1897,'https://www.arsenal.com/sites/default/files/styles/mobile_16x9/public/images/arsenal_crest.jpg?itok=6FqNkIv-',
    'Premiere','London','UK'),
  ];

  getClubs() {
    return this.clubs.slice();
  }

  addClub(club: Club) {
    this.clubs.push(club);
    this.clubsChanged.emit(this.clubs.slice());
  }

  addClubs(clubs: Club[]) {
    // for (let club of clubs) {
    // this.addClub(club);
    // };
    this.clubs.push(...clubs); 
    this.clubsChanged.emit(this.clubs.slice()); 
    }
  
}