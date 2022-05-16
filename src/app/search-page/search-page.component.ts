import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
//import { Store, select } from '@ngrx/store';
import { CurrentWeatherDetails } from '../dtos/current-weather-details';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  currentWeatherDetails: CurrentWeatherDetails = new CurrentWeatherDetails;
  //$cityName: Event = new Event;
  weatherService: WeatherService;
  weather: any;
  
  constructor(
    private service: WeatherService
    ) { 
      this.weatherService = service;
    }

  getCurrentWeather(cityName: string): void {
    console.log('getCurrentWeather component');
    //this.currentWeatherDetails.description = 'yolo';
    this.weatherService.getCurrentWeather(cityName).subscribe(x => console.log(x));
    //console.log(this.currentWeatherDetails.description);
  }

  ngOnInit() {
    //this.currentWeatherDetails.description = 'fake description';
    //console.log('onInit test');
    //this.weatherService.getCurrentWeather('Los Angeles').subscribe(x => console.log(x.main));
    //console.log(this.currentWeatherDetails.description);
  }

}
