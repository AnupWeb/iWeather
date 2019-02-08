import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  apiKey = 'b6907d289e10d714a6e88b30761fae22';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

    this.url = 'https://openweathermap.org/data/2.5/weather/?appid='+this.apiKey+'&id=1261481';
  }
    getWeather(lat, lon){
      return this.http.get(this.url+'/'+lon+'/'+lat)
        .map(res => res);
    }

}
