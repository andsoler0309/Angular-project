import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuseumModule } from './museum/museum.module';
import { ArtistModule } from './artist/artist.module';
import { ArtworkModule } from './artwork/artwork.module';
import { MovementModule } from './movement/movement.module';
import { ExhibitionModule } from './exhibition/exhibition.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MuseumModule,
    AppRoutingModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ArtistModule,
    ArtworkModule,
    MovementModule,
    ExhibitionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
