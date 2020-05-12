import { Component, OnInit } from '@angular/core';
import { PokemonTypeService } from '../pokemon-type.service';
import { PokeApiService, PokemonType, Effectiveness, GroupedMatchups } from '../core/services/api/poke-api.service';

@Component({
  selector: 'app-pokemon-details-weaknesses',
  templateUrl: './pokemon-details-weaknesses.component.html',
  styleUrls: ['./pokemon-details-weaknesses.component.css']
})
export class PokemonDetailsWeaknessesComponent implements OnInit {
  
  dmgs = [4, 2, 1, 0.5, 0.25, 0];

  constructor(private pokemonTypeService: PokemonTypeService,
              private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
  }

  getWeaknesses(effectiveness: Effectiveness, type1: string, type2: string = 'None') {
    let pt1 = this.pokeApiService.getEnumPokemonType(type1);
    let pt2 = this.pokeApiService.getEnumPokemonType(type2);

    let groupedMatchups = this.pokeApiService.defensiveMatchups(pt1, pt2);

    console.log(groupedMatchups);

    let output = [];

    for (let matchup of groupedMatchups.matchups) {
      if (matchup.effectiveness === effectiveness) {
        output.push(matchup);
      }
    }

    return output;
  }

}
