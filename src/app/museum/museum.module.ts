import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';



@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    MuseumListComponent,
    MuseumDetailComponent
  ],
  exports: [MuseumListComponent, MuseumDetailComponent]
})
export class MuseumModule { }
