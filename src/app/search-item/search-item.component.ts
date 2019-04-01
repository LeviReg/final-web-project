import { Component, OnInit } from '@angular/core';
import {Place} from 'src/app/place'
import { from } from 'rxjs';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import {PlacesServiceService} from 'src/app/service/places-service.service'
import { ICandidate } from '../placeService' //wrong interface name

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  searchData: any;
  data:ICandidate;


  constructor(private service: PlacesServiceService) {}


  searchFor(searchTerm : string): boolean{
    this.service.searchFor(searchTerm).subscribe(searchData =>{this.searchData = searchData});
    
    return false
  }

  //this.service

  ngOnInit() {
  }

}
