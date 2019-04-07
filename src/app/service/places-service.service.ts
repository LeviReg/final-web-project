import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { ICandidate, IPlace } from '../placeService';
import { text } from '@angular/core/src/render3';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Place } from '../place';


@Injectable()
export class PlacesServiceService {
  //base url and key for search feature
  private _baseURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@54.26924,-8.47407&key=';
  private _key = 'AIzaSyAfpFph9kJ4Nlosogg2zJyjCmekouF3Lug&input=';
  //base url to get an image back with search request
  private _photoBaseURL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';
  private _photoKey = '&key=AIzaSyAfpFph9kJ4Nlosogg2zJyjCmekouF3Lug';

  //collections and variables
  placesDataCollection: AngularFirestoreCollection<ICandidate>
  public allData: Observable<ICandidate[]>;
  placesDoc : AngularFirestoreDocument<ICandidate>;

  //function to handle errors
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private _http: HttpClient, private _afs: AngularFirestore) 
  { 
    this.allData = this._afs.collection('data_todo').valueChanges();
  }

  //this method will be for uploading data to firestore
  myMethod(Name: string, Address: string, Rating: number, ImageURL: string, ) {
    this.placesDataCollection = this._afs.collection("data_todo");
    this._afs.collection("data_todo").add({
      'Name': Name,
      'Address': Address,
      'Rating': Rating,
      'ImageURL': ImageURL
    })
    
  }

  //this is my function for searching
  searchFor(searchTerm): Observable<ICandidate> {
    console.log("URL: " + this._baseURL + this._key + searchTerm);
    return this._http.get<ICandidate>(this._baseURL + this._key + searchTerm).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  //this function is to get the image url back with the photokey
  getImage(searchTerm): string{
    console.log("ImageSearchURL: " +this._photoBaseURL+searchTerm+this._photoKey);   
        return this._photoBaseURL+searchTerm+this._photoKey;  
  }

  //this is to add the item to the collection
  savePlace(place: ICandidate): void {
    this.placesDataCollection.add({ ...place });
  }
//gets all data returned
  getPlaces() {
    return this.allData;
  }

//this function will remove an item that has been completed
  deletePlace(place: ICandidate) {
    console.log(place.name);
    //this.placesDoc = this._afs.doc(`places/${place.candidates[0].name}`);
    //this.placesDoc.delete();
  }

}
