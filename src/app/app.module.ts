import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { PlacesServiceService } from './service/places-service.service';
import {GetFirestoreDataService} from './service/get-firestore-data.service'
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {SuiModule} from 'ng2-semantic-ui';
import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import * as $ from "jquery";


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'final-project-app'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [PlacesServiceService, GetFirestoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

