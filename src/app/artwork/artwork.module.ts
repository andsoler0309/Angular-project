import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArtworkListComponent],
  exports: [ArtworkListComponent]
})
export class ArtworkModule { }
