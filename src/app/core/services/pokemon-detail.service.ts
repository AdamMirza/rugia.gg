import { Injectable } from '@angular/core';
import { UserPokemon } from '../../pokemon-team-icon/pokemon-team-icon.component';
import { PokemonType } from './api/poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  currentPokemon: UserPokemon;

  constructor() { }

  setCurrentPokemon(userPokemon: UserPokemon) {
    this.currentPokemon = userPokemon;
  }

  getCurrentPokemon() {
    return this.currentPokemon;
  }

  getCurrentMoveset() {
    console.log(this.currentPokemon.current_moveset);
    return this.currentPokemon.current_moveset;
  }
}

export class Move {
  type: PokemonType;
  name: string;
  power: number;
  accuracy: number;
  pp: number;
  effect: string;

  constructor(type: PokemonType, name: string, power: number, accuracy: number, pp: number, effect: string) {
    this.type = type;
    this.name = name;
    this.power = power;
    this.accuracy = accuracy;
    this.pp = pp;
    this.effect = effect;
  }
}
