import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { RouterModule } from '@angular/router';
import { ExhibitionCreateComponent } from './exhibition-create/exhibition-create.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ExhibitionRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExhibitionListComponent, ExhibitionDetailComponent, ExhibitionCreateComponent],
  exports: [ExhibitionListComponent, ExhibitionDetailComponent, ExhibitionCreateComponent]
})
export class ExhibitionModule { }

