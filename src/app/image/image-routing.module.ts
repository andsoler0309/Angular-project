import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCreateComponent } from './image-create/image-create.component';

const routes: Routes = [
  { path: 'create-image', component: ImageCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
