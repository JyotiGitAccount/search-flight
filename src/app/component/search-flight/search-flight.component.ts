import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { MatSort, MatSortable, MatTableDataSource}  from '@angular/material'
import {SearchFlightService } from '../../service/search-flight.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  f:Number;
  d:Date;
  Ori:String;
  des:String;
  formdata;
  stateCtrl: FormControl;
  dataSource;
  displayedColumns = ['flightNumber', 'carrier', 'origin', 'departure', 'destination', 'arrival', 'aircraft', 'distance'];
  constructor(private flightservice : SearchFlightService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      f: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      d: new FormControl("", Validators.compose([
        Validators.required
      ])),
      ori: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(3)         
      ])),
      des: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3) 
     ])),
   });
    
  }


  onClickSubmit(data): void {
    this.flightservice.getFlightDetails().subscribe(results =>{
      if(!results){
        return;
      }
      this.dataSource = new MatTableDataSource(results.filter(function (entry) {
        let departureDate = moment(new Date(entry.departure)).format('YYYY-MM-DD');
        if(entry.flightNumber === data.f && departureDate == data.d  
          || entry.origin == data.ori &&  entry.destination == data.des  && departureDate == data.d )
        return entry;
      }))
    })
  }
}
