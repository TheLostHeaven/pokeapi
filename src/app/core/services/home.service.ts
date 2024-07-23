import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs';
import { PokemonReturn } from 'src/app/models/pokemonList.model';





@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=&limit=350';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<PokemonReturn[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results)
    );
  }

}
