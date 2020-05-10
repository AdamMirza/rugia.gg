import { Injectable } from '@angular/core';
import { UserPokemon } from '../../pokemon-team-icon/pokemon-team-icon.component';

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
}
