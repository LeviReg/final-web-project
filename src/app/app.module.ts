import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { PlacesServiceService } from './service/places-service.service';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {AngularFireModule} from 'angularfire2';
import { PopupInfoComponent } from './popup-info/popup-info.component'


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    SearchItemComponent,
    PopupInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SuiModule
  ],
  providers: [PlacesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
