import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor(private http: HttpClient) { }

  getPokemonId(pokemonName: string) {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .subscribe(data => console.log(data));
  }
}
