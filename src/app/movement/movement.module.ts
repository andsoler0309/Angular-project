import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MovementCreateComponent } from './movement-create/movement-create.component';
import { MovementRoutingModule } from './movement-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MovementRoutingModule
  ],
  declarations: [MovementCreateComponent]
})
export class MovementModule { }
