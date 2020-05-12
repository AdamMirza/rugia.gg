import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  table: Map<any, any>;

  constructor(private http: HttpClient) {
    this.table = this.createTypeMap(types, rawData);
  }

  getPokemonId(pokemonName: string) {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .subscribe(data => console.log(data));
  }

  offensiveMatchups(type: PokemonType) {
    const matchups = types.map((t) => {
      const eff = this.matchupFor(t, PokemonType.NONE, type);
      return new Matchup(t, eff);
    });
    return new GroupedMatchups(matchups);
  }
  
  defensiveMatchups(t1: PokemonType, t2: PokemonType) {
    const matchups = types.map((t) => {
      const eff = this.matchupFor(t1, t2, t);
      return new Matchup(t, eff);
    });
    return new GroupedMatchups(matchups);
  }
  
  private keyForTypes(t1: PokemonType, t2: PokemonType) {
    return t1 + " ~ " + t2;
  }

  private createTypeMap(types: Array<PokemonType>, related_types: number[][]) {
    let map = new Map();
    for (let i = 0; i < types.length; i++) {
      for (let j = 0; j < related_types[i].length; j++) {
        map.set(this.keyForTypes(types[i], types[j]), related_types[i][j]);
      }
    }

    return map;
  }

  matchupFor(ta1: PokemonType, ta2: PokemonType, tb: PokemonType) {
    const x1 = this.table.get(this.keyForTypes(tb, ta1));
    // Don't allow bogus type combinations, such as Fire/Fire or Fire/None
    const x2 = ta1 !== ta2 && ta2 !== PokemonType.NONE ? this.table.get(this.keyForTypes(tb, ta2)) : 1;
    const x3 = x1 * x2;
    if (x3 === 4) {
      return Effectiveness.QUADRUPLE;
    }
    if (x3 === 2) {
      return Effectiveness.DOUBLE;
    }
    if (x3 === 1) {
      return Effectiveness.REGULAR;
    }
    if (x3 === 0.5) {
      return Effectiveness.HALF;
    }
    if (x3 === 0.25) {
      return Effectiveness.QUARTER;
    }
    if (x3 === 0) {
      return Effectiveness.ZERO;
    }
    throw new Error();
  }

  getEnumPokemonType(type: string): PokemonType {
    if (type === null || type === undefined) {
      return PokemonType.NONE;
    }

    type = type.toLowerCase();
    if (type === 'normal') {
      return PokemonType.NORMAL;
    }
    else if (type === "fighting") {
      return PokemonType.FIGHTING;
    }
    else if (type === "flying") {
      return PokemonType.FLYING;
    }
    else if (type === "poison") {
      return PokemonType.POISON;
    }
    else if (type === "ground") {
      return PokemonType.GROUND;
    }
    else if (type === "rock") {
      return PokemonType.ROCK;
    }
    else if (type === "bug") {
      return PokemonType.BUG;
    }
    else if (type === "ghost") {
      return PokemonType.GHOST;
    }
    else if (type === "steel") {
      return PokemonType.STEEL;
    }
    else if (type === "fire") {
      return PokemonType.FIRE;
    }
    else if (type === "water") {
      return PokemonType.WATER;
    }
    else if (type === "grass") {
      return PokemonType.GRASS;
    }
    else if (type === "electric") {
      return PokemonType.ELECTRIC;
    }
    else if (type === "psychic") {
      return PokemonType.PSYCHIC;
    }
    else if (type === "ice") {
      return PokemonType.ICE;
    }
    else if (type === "dragon") {
      return PokemonType.DRAGON;
    }
    else if (type === "dark") {
      return PokemonType.DARK;
    }
    else if (type === "fairy") {
      return PokemonType.FAIRY;
    }
    else if (type === "none") {
      return PokemonType.NONE;
    }
  }

}

export enum PokemonType {
  NORMAL = "normal",
  FIGHTING = "fighting",
  FLYING = "flying",
  POISON = "poison",
  GROUND = "ground",
  ROCK = "rock",
  BUG = "bug",
  GHOST = "ghost",
  STEEL = "steel",
  FIRE = "fire",
  WATER = "water",
  GRASS = "grass",
  ELECTRIC = "electric",
  PSYCHIC = "psychic",
  ICE = "ice",
  DRAGON = "dragon",
  DARK = "dark",
  FAIRY = "fairy",
  NONE = "none",
}

export const types = [
  PokemonType.NORMAL,
  PokemonType.FIGHTING,
  PokemonType.FLYING,
  PokemonType.POISON,
  PokemonType.GROUND,
  PokemonType.ROCK,
  PokemonType.BUG,
  PokemonType.GHOST,
  PokemonType.STEEL,
  PokemonType.FIRE,
  PokemonType.WATER,
  PokemonType.GRASS,
  PokemonType.ELECTRIC,
  PokemonType.PSYCHIC,
  PokemonType.ICE,
  PokemonType.DRAGON,
  PokemonType.DARK,
  PokemonType.FAIRY,
];

export const typesOrNone = [...types, PokemonType.NONE];

export enum Effectiveness {
  QUADRUPLE = 4,
  DOUBLE = 2,
  REGULAR = 1,
  HALF = 0.5,
  QUARTER = 0.25,
  ZERO = 0,
}

const rawData = [
  [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5],
  [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1],
  [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
  [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1],
  [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
  [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5],
  [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1],
  [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2],
  [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1],
  [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1],
  [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
  [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1],
  [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
  [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5],
  [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1],
];

// TODO: Types seem wrong here
// const pairs = flatMap(
//   rawData, (row, i) => {
//   return row.map((data, j) => {
//     return [keyForTypes(types[i], types[j]), data];
//   });
// });

// TODO: Types seem wrong here
// const table = fromPairs(pairs);



export class Matchup {
  constructor(public type: PokemonType, public effectiveness: Effectiveness) {}
}

export class GroupedMatchups {
  constructor(public matchups: Matchup[]) {}

  typesFor(effectivenes: Effectiveness): PokemonType[] {
    return this.matchups
      .filter((m) => m.effectiveness === effectivenes)
      .map((m) => m.type);
  }
}

