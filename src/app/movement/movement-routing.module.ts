import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementCreateComponent } from './movement-create/movement-create.component';



const routes: Routes = [{
  path: 'movement',
  children: [
    {
      path: 'create',
      component: MovementCreateComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementRoutingModule { }
