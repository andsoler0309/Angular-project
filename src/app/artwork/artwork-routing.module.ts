import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';


const routes: Routes = [{
  path: 'artworks',
  children: [
    {
      path: 'create',
      component: ArtworkCreateComponent
    },
    {
      path: 'list',
      component: ArtworkListComponent
    },
    {
      path: ':id',
      component: ArtworkDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtworkRoutingModule { }
