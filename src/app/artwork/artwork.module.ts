import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { RouterModule } from '@angular/router';
import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ArtworkRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [ArtworkListComponent, ArtworkDetailComponent, ArtworkCreateComponent],
  exports: [ArtworkListComponent]
})
export class ArtworkModule { }
