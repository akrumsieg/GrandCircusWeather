import { Clouds } from './weather-api-response/clouds';
import { Coordinates } from './weather-api-response/coordinates'
import { Main } from './weather-api-response/main';
import { Sys } from './weather-api-response/sys';
import { Weather } from './weather-api-response/weather';
import { Wind } from './weather-api-response/wind';

export interface WeatherApiResponse {
    coordinates: Coordinates;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}