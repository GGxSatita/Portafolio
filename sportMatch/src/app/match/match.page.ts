import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  players = [
    { name: 'Jugador 1' },
    { name: 'Jugador 2' },
    { name: 'Jugador 3' },
  ];
  sports = ['Fútbol', 'Básquetbol', 'Voleibol'];
  selectedPlayer = null;

  selectPlayer(player: any) {
    this.selectedPlayer = player;
  }
}
