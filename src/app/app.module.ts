import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
