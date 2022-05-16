import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, Subscriber, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { CurrentWeatherDetails } from './dtos/current-weather-details';
import { SearchPageComponent } from './search-page/search-page.component';
import { environment } from 'src/environments/environment';
import { WeatherApiResponse } from './dtos/weather-api-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  weatherObservable: Observable<any> = new Observable;

  getCurrentWeather(cityName: string): Observable<WeatherApiResponse> {
    return this.http.get<WeatherApiResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${environment.apiKey}`)
      .pipe();
  }

}
