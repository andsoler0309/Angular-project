import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCreateComponent } from './image-create/image-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ImageCreateComponent
  ],
  exports: [ImageCreateComponent]
})
export class ImageModule { }
