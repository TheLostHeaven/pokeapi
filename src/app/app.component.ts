import { Component, OnInit } from '@angular/core';
import { HomeService } from './core/services/home.service';
import { PokemonReturn } from './models/pokemonList.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: PokemonReturn[] = []
  isLoading = true;
  errorMessage = '';

  constructor (private service: HomeService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      response => {
        console.log('Data received:', response);
        this.data = response;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching data', error);
      this.errorMessage = 'Error fetching data';
      this.isLoading = false;
      }
    );
  }
}
