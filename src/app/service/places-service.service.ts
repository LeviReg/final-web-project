import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { ICandidate } from '../placeService';


@Injectable()
export class PlacesServiceService {

  private _baseURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@54.26924,-8.47407&key=';
  private _key = 'AIzaSyAfpFph9kJ4Nlosogg2zJyjCmekouF3Lug&input=';

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
}
