import { Component } from '@angular/core';
import { us_cities } from './cities';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searched: string = '';
  searched_cities: string[] = [];

  constructor() {
    this.searched_cities = us_cities;
  }
  
  onSearchChange(): void {
    this.searched_cities = us_cities.filter(city => city.toLowerCase().includes(this.searched.toLowerCase()));
  }

  selectedCity(city: string): void {
    this.searched = city;
    this.searched_cities = [];
  }
}
