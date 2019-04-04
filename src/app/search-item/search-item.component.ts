import {Component,OnInit} from '@angular/core';
import {Place} from 'src/app/place'
import {from} from 'rxjs';
import {HttpClientModule,HttpHeaders} from '@angular/common/http'
import {
  PlacesServiceService
} from 'src/app/service/places-service.service'
import {ICandidate} from '../placeService' //wrong interface name
import * as $ from 'jquery';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  searchData: any;
  imageURL: string;
  data: ICandidate;


  constructor(private service: PlacesServiceService) {}


  searchFor(searchTerm: string): boolean {
    this.service.searchFor(searchTerm).subscribe(searchData => {
      this.data = searchData;
      this.getImage(this.data.candidates[0].photos[0].photo_reference)
    });
    return false
  }

  getImage(imageString: string) {
    console.log("Get Image: " + imageString);
    this.imageURL = this.service.getImage(imageString);
    console.log("this.imageURL: " + this.imageURL)
  }

  ngOnInit() {

  }

}
