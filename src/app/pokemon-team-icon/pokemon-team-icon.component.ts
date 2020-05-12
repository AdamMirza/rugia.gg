import { Component, OnInit } from '@angular/core';
import { PokemonDetailService, Move } from '../core/services/pokemon-detail.service';
import { PokemonType } from '../core/services/api/poke-api.service';

@Component({
  selector: 'app-pokemon-team-icon',
  templateUrl: './pokemon-team-icon.component.html',
  styleUrls: ['./pokemon-team-icon.component.css']
})
export class PokemonTeamIconComponent implements OnInit {

  userPokemonTeam: UserPokemon[] = [];

  constructor(private pds: PokemonDetailService) {
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Charmander', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c8a2987f-3e2e-4e4d-9aac-27d02b24bdd3/d6th2ej-b07148ff-57c7-46c6-be65-04d41dbb2b97.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
    this.userPokemonTeam.push(new UserPokemon('Bulbasaur', 'https://art.pixilart.com/6ba93206eb9dad5.png', 60));
  }

  ngOnInit(): void {
    this.pds.setCurrentPokemon(this.userPokemonTeam[0])
  }

  updateCurrentPokemon(userPokemon: UserPokemon) {
    this.pds.setCurrentPokemon(userPokemon);
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
  stats: EvIvList;
  current_moveset: Move[];

  constructor(name: string, url: string, level: number) {
    this.name = name;
    this.url = url;
    this.level = level;
    this.max_hp = 100;
    this.current_hp = 80;
    this.xp_to_next_lvl = 200;
    this.current_xp = 62;
    this.stats = new EvIvList(
      new EvIvStat(StatName.MaxHp, 10, 10, 10),
      new EvIvStat(StatName.Atk, 20, 20, 20),
      new EvIvStat(StatName.Def, 30, 30, 30),
      new EvIvStat(StatName.SpAtk, 40, 40, 40),
      new EvIvStat(StatName.SpDef, 50, 50, 50),
      new EvIvStat(StatName.Speed, 60, 60, 60)
    );
    this.current_moveset = new Array<Move>();
    this.current_moveset.push(new Move(PokemonType.FIRE, 'Flamethrower', 90, 100, 15, 'Burns some pokepunks...'));
    this.current_moveset.push(new Move(PokemonType.FIRE, 'Flamethrower', 90, 100, 15, 'Burns some pokepunks...'));
    this.current_moveset.push(new Move(PokemonType.FIRE, 'Flamethrower', 90, 100, 15, 'Burns some pokepunks...'));
    this.current_moveset.push(new Move(PokemonType.FIRE, 'Flamethrower', 90, 100, 15, 'Burns some pokepunks...'));
  }

  getStatsList() {
    return this.stats.statsList;
  }
}

export class EvIvList {
  statsList: EvIvStat[];
  
  constructor(max_hp: EvIvStat, atk: EvIvStat, def: EvIvStat, spAtk: EvIvStat, spDef: EvIvStat, speed: EvIvStat) {
    this.statsList = new Array(6);
    this.statsList[5] = speed;
    this.statsList[4] = spDef;
    this.statsList[3] = spAtk;
    this.statsList[2] = def;
    this.statsList[1] = atk;
    this.statsList[0] = max_hp;
  }
}

export class EvIvStat {
  statName: StatName;
  base: number;
  iv: number;
  ev: number;
  total: number;

  constructor(statName: StatName, base: number, iv: number, ev: number) {
    this.statName = statName;
    this.base = base;
    this.iv = iv;
    this.ev = ev;
    this.total = base + iv + ev;
  }
}

enum StatName {
  MaxHp = "Max HP",
  Atk = "Attack",
  Def = "Defense",
  SpAtk = "Sp. Attack",
  SpDef = "Sp. Defense",
  Speed = "Speed"
}