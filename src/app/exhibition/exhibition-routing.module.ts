import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionCreateComponent } from './exhibition-create/exhibition-create.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';

const routes: Routes = [{
  path: 'exhibitions',
  children: [
    {
      path: 'create',
      component: ExhibitionCreateComponent
    },

    {
      path: 'list',
      component: ExhibitionListComponent
    },

    {
      path: ':id',
      component: ExhibitionDetailComponent
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitionRoutingModule { }
