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
import { ArtworkRoutingModule } from './artwork/artwork-routing.module';
import { RouterModule } from '@angular/router';

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
    ExhibitionModule,
    ArtworkRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
