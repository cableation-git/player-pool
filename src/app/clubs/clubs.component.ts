import { Component, OnInit } from '@angular/core';
import { Club } from '../clubs/club.model';
import { ClubService } from './club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: Club[]; 

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubs = this.clubService.getClubs();
    this.clubService.clubsChanged
      .subscribe(
        (clubs: Club[]) => {
          this.clubs = clubs;
        }
      )
  }

}
