import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExhibitionListComponent, ExhibitionDetailComponent],
  exports: [ExhibitionListComponent, ExhibitionDetailComponent]
})
export class ExhibitionModule { }

