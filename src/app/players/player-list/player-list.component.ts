import { Component, OnInit } from '@angular/core';
import { Player } from  '../player.model'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [
    new Player('Bob', 'Smith', '1936-02-02', 70, 150, 'Lakewood', 'CA', 'us','http://www.empireofsoccer.com/wp-content/uploads/2014/06/Clint-Dempsey-USMNT.jpg'),
    new Player('Billy', 'Jones', '1939-01-02', 70, 150, 'Ternbury', 'CO', 'us','https://cdn.vox-cdn.com/thumbor/dy430hRE-67MFbrgE_Gh6cE2vqw=/0x0:2029x2962/1200x800/filters:focal(896x623:1220x947)/cdn.vox-cdn.com/uploads/chorus_image/image/61716121/usa_today_10990034.0.jpg')
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.players);
  }

}
