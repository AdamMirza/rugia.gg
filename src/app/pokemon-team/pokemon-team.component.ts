import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.css']
})
export class PokemonTeamComponent implements OnInit {

  teamName: string;

  constructor() {
    this.teamName = 'Light Bulbs';
  }

  ngOnInit(): void {
  }

}
