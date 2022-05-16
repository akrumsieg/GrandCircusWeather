import { Component, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
//import { Store, select } from '@ngrx/store';
import { CurrentWeatherDetails } from '../dtos/current-weather-details';
import { WeatherApiResponse } from '../dtos/weather-api-response';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  weatherService: WeatherService;
  currentWeather: WeatherApiResponse | undefined;
  
  constructor(private service: WeatherService) { 
    this.weatherService = service;
  }

  getCurrentWeather(cityName: string): void {
    this.weatherService.getCurrentWeather(cityName).subscribe(x => this.currentWeather = x);
  }

  ngOnInit() { }

}
