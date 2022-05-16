import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CurrentWeatherDetails } from '../dtos/current-weather-details';
import { WeatherApiResponse } from '../dtos/weather-api-response';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() weatherApiResponse: WeatherApiResponse | undefined;

  weatherDetails: CurrentWeatherDetails = new CurrentWeatherDetails;

  ngOnChanges(changes: SimpleChanges) {
    this.mapToWeatherDetails();
  }

  mapToWeatherDetails() {
    if(this.weatherApiResponse) {
      this.weatherDetails.cityName = this.weatherApiResponse.name;
      this.weatherDetails.description = this.weatherApiResponse.weather[0].description;
      this.weatherDetails.temperature = `${this.convertKelvinToF(this.weatherApiResponse.main.temp)}\xB0F`;
      this.weatherDetails.feelsLike = `${this.convertKelvinToF(this.weatherApiResponse.main.feels_like)}\xB0F`;
      this.weatherDetails.humidity = `${this.weatherApiResponse.main.humidity}%`;
      this.weatherDetails.windSpeed = `${this.weatherApiResponse.wind.speed}mph`;
    }
  }

  convertKelvinToF(kelvin: number): number {
    return Math.round(1.8*(kelvin - 273) + 32);
  }

  constructor() { }

  ngOnInit(){ }

}
