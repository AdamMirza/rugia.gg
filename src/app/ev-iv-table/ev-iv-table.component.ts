import { Component, OnInit } from '@angular/core';
import { PokemonDetailService } from '../core/services/pokemon-detail.service';

@Component({
  selector: 'app-ev-iv-table',
  templateUrl: './ev-iv-table.component.html',
  styleUrls: ['./ev-iv-table.component.css']
})
export class EvIvTableComponent implements OnInit {

  constructor(private pds: PokemonDetailService) { }

  ngOnInit(): void {
  }

}
