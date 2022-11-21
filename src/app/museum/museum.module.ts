import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { ArtworkModule } from '../artwork/artwork.module';
import { ExhibitionModule } from '../exhibition/exhibition.module';
import { RouterModule } from '@angular/router';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ArtworkModule,
    ExhibitionModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    MuseumListComponent,
    MuseumDetailComponent,
    MuseumCreateComponent
  ],
  exports: [MuseumListComponent, MuseumDetailComponent, MuseumCreateComponent]
})
export class MuseumModule { }
