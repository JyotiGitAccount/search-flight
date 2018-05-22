import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {FlightDetail} from '../model/flight-detail.model'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {
  private searchFlightUrl = 'http://localhost:8882/searchFlights?ori=IAH&des=ORD&d=2018-01-20';
  
  constructor(private http : HttpClient) { }

  getFlightDetails(): Observable<FlightDetail []>{
    console.log("##searchFlightUrl = "+this.searchFlightUrl);
     let o  = this.http.get<FlightDetail[]>(this.searchFlightUrl);
          return o;
  }

}
