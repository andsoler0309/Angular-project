import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumListComponent } from './museum-list/museum-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MuseumListComponent
  ],
  exports: [MuseumListComponent]
})
export class MuseumModule { }
