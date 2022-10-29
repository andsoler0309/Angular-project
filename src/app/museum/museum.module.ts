import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MuseumListComponent } from './museum-list/museum-list.component';



@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    MuseumListComponent
  ],
  exports: [MuseumListComponent]
})
export class MuseumModule { }
