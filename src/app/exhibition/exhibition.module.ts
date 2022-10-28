import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExhibitionListComponent],
  exports: [ExhibitionListComponent]
})
export class ExhibitionModule { }

