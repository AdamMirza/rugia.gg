import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetailService } from '../core/services/pokemon-detail.service';
import { UserPokemon } from '../pokemon-team-icon/pokemon-team-icon.component';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input()
  userPokemon: UserPokemon;

  constructor(private pds: PokemonDetailService) { }

  ngOnInit(): void {
  }
}
