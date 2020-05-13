import { Component, OnInit, Input } from '@angular/core';
import { PokemonTypeService } from '../pokemon-type.service';
import { PokeApiService, PokemonType, Effectiveness, GroupedMatchups } from '../core/services/api/poke-api.service';
import { UserPokemon } from '../pokemon-team-icon/pokemon-team-icon.component';

@Component({
  selector: 'app-pokemon-details-weaknesses',
  templateUrl: './pokemon-details-weaknesses.component.html',
  styleUrls: ['./pokemon-details-weaknesses.component.css']
})
export class PokemonDetailsWeaknessesComponent implements OnInit {

  @Input()
  userPokemon: UserPokemon;
  
  dmgs = [4, 2, 1, 0.5, 0.25, 0];

  constructor(private pokemonTypeService: PokemonTypeService,
              private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
  }

  getWeaknesses(effectiveness: Effectiveness) {
    let pt1 = this.pokeApiService.getEnumPokemonType(this.userPokemon.type1);
    let pt2 = this.pokeApiService.getEnumPokemonType(this.userPokemon.type2);

    let groupedMatchups = this.pokeApiService.defensiveMatchups(pt1, pt2);

    let output = [];

    for (let matchup of groupedMatchups.matchups) {
      if (matchup.effectiveness === effectiveness) {
        output.push(matchup);
      }
    }

    return output;
  }

}
