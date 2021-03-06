import { Component, OnInit, Input } from '@angular/core';
import { UserPokemon } from '../pokemon-team-icon/pokemon-team-icon.component';
import { PokemonDetailService } from '../core/services/pokemon-detail.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  @Input()
  userPokemon: UserPokemon;

  maximized: boolean;

  constructor() {
    this.maximized = true;
  }

  ngOnInit(): void {
  }

  setMaximizedTrue() {
    this.maximized = true;
  }

  setMaximizedFalse() {
    this.maximized = false;
  }

}
