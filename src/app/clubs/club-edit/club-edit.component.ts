import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Club } from '../club.model';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-club-edit',
  templateUrl: './club-edit.component.html',
  styleUrls: ['./club-edit.component.css']
})
export class ClubEditComponent implements OnInit {
  @ViewChild('clubNameInput', { static: false }) clubNameInputReference: ElementRef;
  @ViewChild('leagueInput', { static: false }) leagueInputReference: ElementRef;
  @ViewChild('originYearInput', { static: false }) originYearInputReference: ElementRef;
  @ViewChild('iconURLInput', { static: false }) iconURLInputReference: ElementRef;
  @ViewChild('leagueDivisionInput', { static: false }) leagueDivisionInputReference: ElementRef;
  @ViewChild('cityInput', { static: false }) cityInputReference: ElementRef;
  @ViewChild('countryInput', { static: false }) countryInputReference: ElementRef;
  
  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  onAddItem() {
    const clubClubName = this.clubNameInputReference.nativeElement.value;
    const clubLeague = this.leagueInputReference.nativeElement.value;
    const clubOriginYear = this.originYearInputReference.nativeElement.value;
    const clubIconURL = this.iconURLInputReference.nativeElement.value;
    const clubLeagueDivision = this.leagueDivisionInputReference.nativeElement.value;
    const clubCity = this.cityInputReference.nativeElement.value;
    const clubCountry = this.countryInputReference.nativeElement.value;
  
    const newClub = new Club(
        clubClubName, 
        clubLeague,
        clubOriginYear, 
        clubIconURL, 
        clubLeagueDivision,
        clubCity,
        clubCountry
        ); 
    this.clubService.addClub(newClub);          
  }
}
