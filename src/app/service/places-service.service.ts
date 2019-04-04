import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { ICandidate } from '../placeService';
import { text } from '@angular/core/src/render3';


@Injectable()
export class PlacesServiceService {

  private _baseURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@54.26924,-8.47407&key=';
  private _key = 'AIzaSyAfpFph9kJ4Nlosogg2zJyjCmekouF3Lug&input=';

  private _photoBaseURL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';
  private _photoKey = '&key=AIzaSyAfpFph9kJ4Nlosogg2zJyjCmekouF3Lug';

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }

  constructor(private _http: HttpClient) { }

  searchFor(searchTerm): Observable<ICandidate>{
    console.log("URL: " +this._baseURL+this._key+searchTerm);
    return this._http.get<ICandidate>(this._baseURL+this._key+searchTerm).pipe(
      tap(data=> console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));  
  }

  getImage(searchTerm): string{
    console.log("ImageSearchURL: " +this._photoBaseURL+searchTerm+this._photoKey);
    // return this._http.get<string>(this._photoBaseURL+searchTerm+this._photoKey, {responseType: 'text' as 'json'}).pipe(
    //   catchError(this.handleError));   
        return this._photoBaseURL+searchTerm+this._photoKey;  
  }
}
