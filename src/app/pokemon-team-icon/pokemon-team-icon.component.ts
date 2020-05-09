import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-team-icon',
  templateUrl: './pokemon-team-icon.component.html',
  styleUrls: ['./pokemon-team-icon.component.css']
})
export class PokemonTeamIconComponent implements OnInit {

  userPokemonTeam: UserPokemon[] = [];

  constructor() {
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
  }

  ngOnInit(): void {
  }

}

export class UserPokemon {
  name: string;
  url: string;
  level: number;
  max_hp: number;
  current_hp: number;
  xp_to_next_lvl: number;
  current_xp: number;

  constructor(name: string, url: string, level: number) {
    this.name = name;
    this.url = url;
    this.level = level;
    this.max_hp = 100;
    this.current_hp = 80;
    this.xp_to_next_lvl = 200;
    this.current_xp = 62;
  }
}