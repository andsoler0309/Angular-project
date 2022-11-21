import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import { MuseumListComponent } from './museum-list/museum-list.component';

const routes: Routes = [
  { path: 'museums-list', component: MuseumListComponent },
  { path: 'create-museum', component: MuseumCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MuseumRoutingModule { }
