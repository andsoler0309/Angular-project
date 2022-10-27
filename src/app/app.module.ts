import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistModule } from './artist/artist.module';
import { ArtworkModule } from './artwork/artwork.module';
import { MovementModule } from './movement/movement.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArtistModule,
    ArtworkModule,
    MovementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
