import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details-weaknesses',
  templateUrl: './pokemon-details-weaknesses.component.html',
  styleUrls: ['./pokemon-details-weaknesses.component.css']
})
export class PokemonDetailsWeaknessesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class Weaknesses {
  double_dmg: PokemonType[];
  normal_dmg: PokemonType[];
  half_dmg: PokemonType[];

  constructor() {
    this.double_dmg = new Array<PokemonType>();
    this.normal_dmg = new Array<PokemonType>();
    this.half_dmg = new Array<PokemonType>();   
  }
}

enum PokemonType {
  NORMAL,
  FIGHTING,
  FLYING,
  POISON,
  GROUND,
  ROCK,
  BUG,
  GHOST,
  STEEL,
  FIRE,
  WATER,
  GRASS,
  ELECTRIC,
  PHYSIC,
  ICE,
  DRAGON,
  DARK,
  FAIRY
}
