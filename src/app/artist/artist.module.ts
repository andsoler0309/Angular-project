import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArtistRoutingModule } from './artist-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ArtistRoutingModule
  ],
  declarations: [ArtistCreateComponent]
})
export class ArtistModule { }
