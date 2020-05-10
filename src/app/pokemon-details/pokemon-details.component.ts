import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from '../core/services/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private pds: PokemonDetailService) { }

  ngOnInit(): void {
  }

}
