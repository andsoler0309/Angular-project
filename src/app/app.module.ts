import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
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
import { MuseumRoutingModule } from './museum/museum-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExhibitionRoutingModule } from './exhibition/exhibition-routing.module';
import { ImageRoutingModule } from './image/image-routing.module';
import { ImageModule } from './image/image.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    MuseumModule,
    ImageModule,
    AppRoutingModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ArtistModule,
    ArtworkModule,
    MovementModule,
    ExhibitionModule,
    ExhibitionRoutingModule,
    ArtworkRoutingModule,
    ImageRoutingModule,
    MuseumRoutingModule,
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
