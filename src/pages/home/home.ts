import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider} from "../../providers/weather/weather";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 weather:any;
 location:{
   lat:number,
   lon:number
 }

  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider) {

  }
    ionViewWillEnter(){
   this.location = {
     lat: 28.61,
     lon: 77.23
   }
      this.weatherProvider.getWeather(this.location.lat, this.location.lon).subscribe(weather =>{
        console.log(weather);
        this.weather = weather;
      });

    }

}
