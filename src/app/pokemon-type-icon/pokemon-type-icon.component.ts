import { Component, OnInit, Input  } from '@angular/core';
import { PokemonType, PokeApiService } from '../core/services/api/poke-api.service';

@Component({
  selector: 'app-pokemon-type-icon',
  templateUrl: './pokemon-type-icon.component.html',
  styleUrls: ['./pokemon-type-icon.component.css']
})
export class PokemonTypeIconComponent implements OnInit {
  @Input()
  pokemonType: string = PokemonType.NONE;

  color: string;
  type: PokemonType;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.type = this.pokeApiService.getEnumPokemonType(this.pokemonType);

    this.color = this.setTypeColor(this.type);
  }

  setTypeColor(type: PokemonType) {
    if (type === PokemonType.NORMAL) {
      return '#A8A77A';
    }
    else if (type === PokemonType.FIGHTING) {
      return '#C22E28';
    }
    else if (type === PokemonType.FLYING) {
      return '#A98FF3';
    }
    else if (type === PokemonType.POISON) {
      return '#A33EA1';
    }
    else if (type === PokemonType.GROUND) {
      return '#E2BF65';
    }
    else if (type === PokemonType.ROCK) {
      return '#B6A136';
    }
    else if (type === PokemonType.BUG) {
      return '#A6B91A';
    }
    else if (type === PokemonType.GHOST) {
      return '#735797';
    }
    else if (type === PokemonType.STEEL) {
      return '#B7B7CE';
    }
    else if (type === PokemonType.FIRE) {
      return '#EE8130';
    }
    else if (type === PokemonType.WATER) {
      return '#6390F0';
    }
    else if (type === PokemonType.GRASS) {
      return '#7AC74C';
    }
    else if (type === PokemonType.ELECTRIC) {
      return '#F7D02C';
    }
    else if (type === PokemonType.PSYCHIC) {
      return '#F95587';
    }
    else if (type === PokemonType.ICE) {
      return '#96D9D6';
    }
    else if (type === PokemonType.DRAGON) {
      return '#6F35FC';
    }
    else if (type === PokemonType.DARK) {
      return '#705746';
    }
    else if (type === PokemonType.FAIRY) {
      return '#D685AD';
    }
    else if (type === PokemonType.NONE) {
      return '#ffffff';
    }
  }

  camelize(pokemonType: PokemonType) {
    let str = pokemonType;
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
}
