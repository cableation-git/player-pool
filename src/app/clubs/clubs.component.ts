import { Component, OnInit } from '@angular/core';
import { Club } from '../clubs/club.model';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: Club[] = [
    new Club('Arsenal','EPL',1897,'https://www.arsenal.com/sites/default/files/styles/mobile_16x9/public/images/arsenal_crest.jpg?itok=6FqNkIv-',
    'Premiere','London','UK'),
    new Club('Chelsea','EPL',1897,'https://www.arsenal.com/sites/default/files/styles/mobile_16x9/public/images/arsenal_crest.jpg?itok=6FqNkIv-',
    'Premiere','London','UK'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
