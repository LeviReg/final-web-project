import { Component, OnInit } from '@angular/core';
import {PlacesServiceService} from 'src/app/service/places-service.service'
import { ICandidate } from '../placeService';
import * as $ from 'jquery';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

places: any;

  constructor(private placeService: PlacesServiceService) {

  }

  //this will add a note to the item.
  addNote(note: string): boolean {
    console.log("Itemlist component: addNote: Note =" + note)
    this.places.addNote = note;
    return false;
  }

  //oninit the data will be take from firestore and put into a div for each item that is hidden
  ngOnInit() {
    this.placeService.getPlaces().subscribe(places => {
      console.log(places);
      this.places = places;

      $("#myList").hide();
    })
  }

  //this calls the delete function
deletePlace(places){
  this.placeService.deletePlace(places); 
  //console.log(places);
}

}
