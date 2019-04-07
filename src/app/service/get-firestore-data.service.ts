import {Injectable} from '@angular/core';
import {AngularFirestoreCollection,AngularFirestoreDocument,AngularFirestore} from 'angularfire2/firestore'
import {ICandidate} from '../placeService';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetFirestoreDataService {
  placesCollection: AngularFirestoreCollection<ICandidate>;
  public places: Observable<ICandidate[]>;

  constructor(public _afs: AngularFirestore) {
    this.places = this._afs.collection('data_todo').valueChanges();
  }

  getData(){
    return this.places;
  }
}
